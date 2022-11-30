import React, { Component } from 'react'
import { Table } from 'reactstrap'
import ModificarPedidoAcModal from './ModificarPedidoAcModal'
import UnassignPedidoAcModal from './UnassignPedidoAcModal'

class ListaPedidosAc extends Component {
    render() {
        const PedidoAc = this.props.PedidoAc
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Patente</th>
                        <th>PedidoAc</th>
                        <th>pedido</th> 
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!PedidoAc || PedidoAc.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No hay Pedidos asignados.</b>
                            </td>
                        </tr>
                    ) : (
                        PedidoAc.map(PedidoAc => (
                            <tr key={PedidoAc.IdVehiculo}>
                                <td>{PedidoAc.patente}</td>
                                <td>{PedidoAc.nombre}</td>
                                <td>{PedidoAc.pedido}</td>
                                <td align="center">
                                    <ModificarPedidoAcModal PedidoAc={PedidoAc} resetState={this.props.resetState2}/>
                                    &nbsp;&nbsp;
                                    <UnassignPedidoAcModal id={PedidoAc.Id} resetState={this.props.resetState2}/> 
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