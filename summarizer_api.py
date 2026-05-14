from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import MBartForConditionalGeneration, MBart50TokenizerFast
from peft import PeftModel
import torch

app = FastAPI()

BASE_MODEL = "facebook/mbart-large-50"   # downloaded from HuggingFace
LORA_PATH  = "G:\\projects\\mbart-lora-nepali"  # only your LoRA adapter files

try:
    tokenizer = MBart50TokenizerFast.from_pretrained(LORA_PATH)
    tokenizer.src_lang = "ne_NP"
    tokenizer.tgt_lang = "ne_NP"

    base_model = MBartForConditionalGeneration.from_pretrained(
        BASE_MODEL,
        torch_dtype=torch.float16,   # half precision — cuts RAM ~in half
        device_map="auto"
    )
    model = PeftModel.from_pretrained(base_model, LORA_PATH)
    model.eval()
    print("Model loaded successfully")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None
    tokenizer = None

class SummarizeRequest(BaseModel):
    text: str

@app.post("/summarize")
async def summarize(request: SummarizeRequest):
    if not model or not tokenizer:
        raise HTTPException(status_code=500, detail="Model not loaded")
    try:
        inputs = tokenizer(request.text, return_tensors="pt",
                           max_length=512, truncation=True)
        inputs = {k: v.to(model.device) for k, v in inputs.items()}

        summary_ids = model.generate(
            **inputs,
            forced_bos_token_id=tokenizer.lang_code_to_id["ne_NP"],
            max_length=150, num_beams=5,
            early_stopping=True,
            repetition_penalty=2.0,
            no_repeat_ngram_size=3
        )
        summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
        return {"summary": summary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))