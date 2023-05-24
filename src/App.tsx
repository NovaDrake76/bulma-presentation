import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu';
import WhatIsBulma from './components/WhatIsBulma';
import Purpose from './components/Purpose';
import Functionalities from './components/Functionalities';
import HowToUse from './components/HowToUse';

const App: React.FC = () => {
  return (
    <Router>
      <div className="columns">
        <div className="column is-one-quarter">
          <SidebarMenu />
        </div>
        <div className="column">
          <Routes>
            <Route path="/whatisbulma" element={<WhatIsBulma />} />
            <Route path="/purpose" element={<Purpose />} />
            <Route path="/functionalities" element={<Functionalities />} />
            <Route path="/howtouse" element={<HowToUse />} />
            <Route path="/" element={<WhatIsBulma />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
