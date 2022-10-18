import React, { Component } from 'react'
import { Table } from 'reactstrap'


import ConfirmarElimPedModal from './ConfirmarElimPedModal'
import ModificarPedidoModal from './ModificarPedidoModal'

class ListaPedidos extends Component {
    render() {
        const pedidos = this.props.pedidos
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Direccion</th>
                        <th>Comentario</th>
                        <th>Estado del pedido</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!pedidos || pedidos.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No hay pedidos actualmente</b>
                            </td>
                        </tr>
                    ) : (
                        pedidos.map(pedido => (
                            <tr key={pedido.idPedido}>
                                <td>{pedido.direccion}</td>
                                <td>{pedido.comentario}</td>
                                <td>{pedido.estado}</td>
                                <td align="center">
                                    <ModificarPedidoModal pedido={pedido} resetState={this.props.resetState}/>
                                    &nbsp;&nbsp;
                                    <ConfirmarElimPedModal idPedido={pedido.idPedido} resetState={this.props.resetState}/> 
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        )
    }
}

export default ListaPedidos