import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Resume from './pages/resume';
import Work from './pages/work';
import About from './pages/about';
import BachelorProjekt from './pages/bachelorprojekt';
import CoffeeNr1 from './pages/coffeenr1';
import KarinMargaritaFrei from './pages/kmf';
import SundByNet from './pages/sbn';

function App() {
  return (
    <Router>
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/bachelorprojekt" element={<BachelorProjekt />} />
          <Route path="/coffeenr1" element={<CoffeeNr1 />} />
          <Route path="/kmf" element={<KarinMargaritaFrei />} />
          <Route path="/sbn" element={<SundByNet />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
