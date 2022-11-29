import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

import Dashboard from "./elements/pages/Dashboard";
import Empleados from "./elements/pages/Empleados/Empleados";
import Inventario from "./elements/pages/Inventario/Inventario";
import Pedidos from "./elements/pages/Pedidos/Pedidos";
import Vehiculos from "./elements/pages/Vehiculos/Vehiculos";
import VehiculosAsignados from "./elements/pages/VehiculosAsignados/VehiculosAsignados";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/empleado" element={<Empleados/>}/>
          <Route path="/inventario" element={<Inventario/>}/>
          <Route path="/pedidos" element={<Pedidos/>}/>
          <Route path="/vehiculos" element={<Vehiculos/>}/>
          <Route path="/vehiculos/asignados" element={<VehiculosAsignados/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
