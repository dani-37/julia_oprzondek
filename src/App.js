import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NavBar from './NavBar.tsx';

import Lambert from './pages/blog/Lambert.tsx'
import SheSoundsOff from './pages/blog/SSO.tsx';
import Language from './pages/blog/Language.tsx'
import Drag from './pages/blog/Drag.tsx'
import Punk from './pages/blog/Punk.tsx'
import Newonce from './pages/blog/Newonce.tsx'

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'YOUR_TRACKING_ID', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};


function App() {
  usePageTracking();

  return (
    <Router>
      <div className="App">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/lambert" element={<Lambert />} />
            <Route path="/blog/sso" element={<SheSoundsOff />} />
            <Route path="/blog/language" element={<Language />} />
            <Route path="/blog/drag" element={<Drag />} />
            <Route path="/blog/punk" element={<Punk />} />
            <Route path="/blog/newonce" element={<Newonce />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
