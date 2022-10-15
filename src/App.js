import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Acceso from './elements/pages/Acceso'
import Dashboard from "./elements/pages/Dashboard";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Acceso/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
