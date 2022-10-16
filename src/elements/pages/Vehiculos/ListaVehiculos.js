import React, { Component } from 'react'
import { Table } from 'reactstrap'
import NuevoVehiculoModal from './NuevoVehiculoModal'

import EliminarVehiculoModal from './EliminarVehiculoModal'

class ListaVehiculos extends Component {
    render() {
        const vehiculos = this.props.vehiculos
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Patente</th>
                        <th>Fecha de Revisión Técnica</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!vehiculos || vehiculos.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No camionetas.</b>
                            </td>
                        </tr>
                    ) : (
                        vehiculos.map(vehiculo => (
                            <tr key={vehiculo.patente}>
                                <td>{vehiculo.fechaRevision}</td>
                                <td align="center">
                                    <NuevoVehiculoModal create={false} vehiculo={vehiculo} resetState={this.props.resetState}/>
                                    &nbsp;&nbsp;
                                    <EliminarVehiculoModal patente={vehiculo.patente} resetState={this.props.resetState}/> 
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