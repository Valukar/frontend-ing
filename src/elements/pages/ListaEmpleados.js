import React, { Component } from 'react'
import { Table } from 'reactstrap'
import NuevoEmpleadoModal from './NuevoEmpleadoModal'

import ConfirmarEliminacionModal from './ConfirmarEliminacionModal'

class ListaEmpleados extends Component {
    render() {
        const empleados = this.props.empleados
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Telefono</th>
                        <th>Tipo de Contrato</th>
                        <th>Estado Laboral</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!empleados || empleados.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No empleados</b>
                            </td>
                        </tr>
                    ) : (
                        empleados.map(empleado => (
                            <tr key={empleado.pk}>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.telefono}</td>
                                <td>{empleado.tipoContrato}</td>
                                <td>{empleado.estadoLaboral}</td>
                                <td align="center">
                                    <NuevoEmpleadoModal create={false} empleado={empleado} resetState={this.props.resetState}/>
                                    &nbsp;&nbsp;
                                    <ConfirmarEliminacionModal pk={empleado.pk} resetState={this.props.resetState}/> 
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        )
    }
}

export default ListaEmpleados