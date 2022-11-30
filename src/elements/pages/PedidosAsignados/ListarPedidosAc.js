import React, { Component } from 'react'
import { Table } from 'reactstrap'
import ModificarPedidoAcModal from './ModificarPedidoAcModal'
import UnassignPedidoAcModal from './UnassignPedidoAcModal'

class ListaPedidosAc extends Component {
    render() {
        const pedidoAc = this.props.pedidoAc
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Repartidor</th>
                        <th>Patente</th>
                        <th>Dirección</th>
                        <th>Comentario</th>
                        
                        
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!pedidoAc || pedidoAc.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No hay Pedidos asignados.</b>
                            </td>
                        </tr>
                    ) : (
                        pedidoAc.map(PedidoAct => (
                            <tr key={PedidoAct.idPedidoActivo}>
                                <td>{PedidoAct.nombre}</td>
                                <td>{PedidoAct.patente}</td>
                                <td>{PedidoAct.direccion}</td>
                                <td>{PedidoAct.comentario}</td>
                                <td align="center">
                                    <ModificarPedidoAcModal PedidoAct={PedidoAct} resetState={this.props.resetState2}/>
                                    &nbsp;&nbsp;
                                    <UnassignPedidoAcModal id={PedidoAct.Id} resetState={this.props.resetState2}/> 
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        )
    }
}

export default ListaPedidosAc