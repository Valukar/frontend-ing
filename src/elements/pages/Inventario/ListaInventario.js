import React, { Component } from 'react'
import { Table } from 'reactstrap'


import ConfirmarEliminacionModalInventario from './ConfirmarEliminacionModalInventario'
import ModificarInventarioModal from './ModificarInventarioModal'


class ListaInventario extends Component {
    render() {
        const inventario_f = this.props.inventario_f
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Id_producto</th>
                        <th>Nombre</th>
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
                            <tr key={inventario.idProducto}>
                                <td>{inventario.idProducto}</td>
                                <td>{inventario.NombreProducto}</td>
                                <td>{inventario.stock}</td>
                                <td>{inventario.precio}</td>
                                <td align="center">
                                    <ModificarInventarioModal create={false} inventario={inventario} resetState={this.props.resetState}/>
                                    &nbsp;&nbsp;
                                    <ConfirmarEliminacionModalInventario idProducto={inventario.idProducto} resetState={this.props.resetState}/> 
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