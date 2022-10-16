import React, { Component } from 'react'
import { Table } from 'reactstrap'

class ListaVehiculosAsignados extends Component {
    render() {
        const vehiculosAsignados = this.props.vehiculosAsignados
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Patente</th>
                        <th>Fecha de Revisión Técnica</th>
                        <th>RUT de Repartidor</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!vehiculosAsignados || vehiculosAsignados.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No camionetas asignadas.</b>
                            </td>
                        </tr>
                    ) : (
                        vehiculosAsignados.map(vehiculoAsignado => (
                            <tr key={vehiculoAsignado.patente}>
                                <td>{vehiculoAsignado.fechaRevision}</td>
                                <td>{vehiculoAsignado.rutRepartidor}</td>
                                <td align="center"> </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        )
    }
}

export default ListaVehiculosAsignados