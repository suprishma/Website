'use client';
import React, { useState, useRef } from 'react';
import GlobalStyles from './components/GlobalStyle';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import SummarizerPage from './summarizer/page';

export default function App() {
  const [page, setPage] = useState('Home');
  const prevPage = useRef('Home');

  const navigate = (p: string) => {
    prevPage.current = page;
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pageMap: { [key: string]: React.ReactElement } = {
    Home: <HomePage setPage={navigate} />,
    About: <AboutPage setPage={navigate} />,
    Projects: <ProjectsPage setPage={navigate} />,
    Contact: <ContactPage setPage={navigate} />,
    Summarizer: <SummarizerPage />,
};
  return (
    <div style={{ background: '#F8F7F4' }}>
      <GlobalStyles />
      <Nav page={page} setPage={navigate} />
      <div key={page} className="page-enter">
        {pageMap[page]}
        <Footer setPage={navigate} />
      </div>
    </div>
  );
}