from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from transformers import MBartForConditionalGeneration, MBart50TokenizerFast
import torch

app = FastAPI()

# Load the model and tokenizer (adjust path as needed)
MODEL_PATH = "G:\\projects\\mbart-lora-nepali(epo3)"  # Change to your local model path
try:
    model = MBartForConditionalGeneration.from_pretrained(MODEL_PATH)
    tokenizer = MBart50TokenizerFast.from_pretrained(MODEL_PATH)
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
        inputs = tokenizer(request.text, return_tensors="pt", max_length=1024, truncation=True)
        summary_ids = model.generate(
            **inputs,
            max_length=150,
            num_beams=5,
            early_stopping=True,
            repetition_penalty=2.0,
            no_repeat_ngram_size=3
        )
        summary = tokenizer.decode(summary_ids[0], skip_special_tokens=True)
        return {"summary": summary}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error generating summary: {str(e)}")

@app.get("/")
async def root():
    return {"message": "Nepali Text Summarizer API"}