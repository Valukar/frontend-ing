import React, { Component } from 'react'
import { Table } from 'reactstrap'
import NuevoInventarioModal from './NuevoInventarioModal'

import ConfirmarEliminacionModalInventario from './ConfirmarEliminacionModalInventario'


class ListaInventario extends Component {
    render() {
        const inventario_f = this.props.inventario_f
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Id_producto</th>
                        <th>Stock</th>
                        <th>Precio</th>
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
                        inventario_f.map(inventario => (
                            <tr key={inventario.id_producto}>
                                <td>{inventario.stock}</td>
                                <td>{inventario.precio}</td>
                                <td align="center">
                                    <NuevoInventarioModal create={false} inventario={inventario} resetState={this.props.resetState}/>
                                    &nbsp;&nbsp;
                                    <ConfirmarEliminacionModalInventario id={inventario.id} resetState={this.props.resetState}/> 
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        )
    }
}

export default ListaInventario