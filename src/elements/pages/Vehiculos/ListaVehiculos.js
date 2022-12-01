import React, { Component } from 'react'
import { Table } from 'reactstrap'

import ConfirmarElimVehiculoModal from './EliminarVehiculoModal'
import ModificarVehiculoModal from './ModificarFechaMantencionModal'
import AsignarVehiculosModal from './AsignarVehiculosModal'

class ListaVehiculos extends Component {
    render() {
        const vehiculos = this.props.vehiculos
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Patente</th>
                        <th>Fecha Revisión</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!vehiculos || vehiculos.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No hay vehiculos</b>
                            </td>
                        </tr>
                    ) : (
                        vehiculos.map(vehiculo => (
                            <tr key={vehiculo.patente}>
                                <td>{vehiculo.patente}</td>
                                <td>{vehiculo.fechaRevision}</td>
                                <td align="center">
                                    <ModificarVehiculoModal vehiculo={vehiculo} resetState={this.props.resetState}/>
                                    &nbsp;&nbsp;
                                    <ConfirmarElimVehiculoModal patente={vehiculo.patente} resetState={this.props.resetState}/>
                                    {/* &nbsp;&nbsp;
                                    <AsignarVehiculosModal patente={vehiculo.patente} resetState={this.props.resetState}/> */}
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        )
    }
}

export default ListaVehiculos