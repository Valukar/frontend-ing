import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Login from "./elements/pages/Acceso";

import Dashboard from "./elements/pages/Dashboard";
import DetalleRecarga from "./elements/pages/DetalleRecargas/DetalleRecarga";
import Empleados from "./elements/pages/Empleados/Empleados";
import Inventario from "./elements/pages/Inventario/Inventario";
import Pedidos from "./elements/pages/Pedidos/Pedidos";
import PedidoAc from "./elements/pages/PedidosAsignados/PedidosAc";
import Recargas from "./elements/pages/Recargas/Recargas";
import Reporterecarga from "./elements/pages/Reportes/reporteRecarga";
import ReporteVentas from "./elements/pages/Reportes/ReporteVenta";
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
          <Route path="/login" element={<Login/>}/>
          <Route path="/pedidos/activo"element={<PedidoAc/>}/>
          <Route path="/reporte"element={<Reporterecarga/>}/>
          <Route path="/reporte/ventas"element={<ReporteVentas/>}/>
          <Route path="/Inventario_recarga"element={<Recargas/>}/>
          <Route path="/detalle_recarga"element={<DetalleRecarga/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
