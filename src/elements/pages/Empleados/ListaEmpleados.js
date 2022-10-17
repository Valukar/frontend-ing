import React, { Component } from 'react'
import { Table } from 'reactstrap'


import ConfirmarEliminacionModal from './ConfirmarEliminacionModal'
import ModificarEmpleadoModal from './ModificarEmpleadoModal'

class ListaEmpleados extends Component {
    render() {
        const empleados = this.props.empleados
        return (
            <Table>
                <thead>
                    <tr>
                        <th>RUT</th>
                        <th>Rol</th>
                        <th>Tipo de Contrato</th>
                        <th>Estado Laboral</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!empleados || empleados.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No empleados.</b>
                            </td>
                        </tr>
                    ) : (
                        empleados.map(empleado => (
                            <tr key={empleado.id}>
                                <td>{empleado.rut}</td>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.rol}</td>
                                <td>{empleado.tipoContrato}</td>
                                <td>{empleado.estadoLaboral}</td>
                                <td align="center">
                                    <ModificarEmpleadoModal empleado={empleado} resetState={this.props.resetState}/>
                                    &nbsp;&nbsp;
                                    <ConfirmarEliminacionModal id={empleado.id} resetState={this.props.resetState}/> 
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