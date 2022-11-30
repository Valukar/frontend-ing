import React, { Component } from "react"
import { Table } from "reactstrap"


class ListaReporteventas extends Component {
    render() {
        const inventario_f = this.props.inventario_f
        return (
            
            <Table>
                <thead>
                    <h1>Reporte de Ventas</h1>
                    <tr>  
                        <th>Fecha</th>
                        <th>Patente</th>
                        <th>producto</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!inventario_f || inventario_f.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No inventario</b>
                            </td>
                        </tr>
                    ) : (
                        inventario_f.map((reporte,i) => (
                            <tr key={i} >
                                
                                <td>{reporte.idVenta__fechaVenta}</td>
                                <td>{reporte.idVenta__idVehiculo__patente}</td>
                                <td>{reporte.idProductos__NombreProducto}</td>
                                <td align="center">
                                   
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        )
    }
}

export default ListaReporteventas