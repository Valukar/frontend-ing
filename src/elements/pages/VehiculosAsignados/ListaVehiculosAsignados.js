import React, { Component } from 'react'
import { Table } from 'reactstrap'

class ListaVehiculosAsignados extends Component {
    render() {
        const vehiculosOp = this.props.vehiculosOp
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Patente</th>
                        <th>Repartidor</th>
                        <th>Fecha Revisión</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!vehiculosOp || vehiculosOp.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No hay vehiculos asignados.</b>
                            </td>
                        </tr>
                    ) : (
                        vehiculosOp.map(vehiculoOp => (
                            <tr key={vehiculoOp.IdVehiculo}>
                                <td>{vehiculoOp.patente}</td>
                                <td>{vehiculoOp.NombreEmpleado}</td>
                                <td>{vehiculoOp.fechaRevision}</td>
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

export default ListaVehiculosAsignados