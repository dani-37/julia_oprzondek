import React, {useState} from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import NavBar from './NavBar.tsx';

import Lambert from './pages/blog/Lambert.tsx'
import SheSoundsOff from './pages/blog/SSO.tsx';
import Language from './pages/blog/Language.tsx'
import Drag from './pages/blog/Drag.tsx'
import Punk from './pages/blog/Punk.tsx'
import Newonce from './pages/blog/Newonce.tsx'


function App() {
  const [activeSection, setActiveSection] = useState('');

  return (
    <Router>
      <div className="App">
        <NavBar activeSection={activeSection} />
        <main>
          <Routes>
            <Route path="/" element={<Home activeSection={activeSection} setActiveSection={setActiveSection}/>} />
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
