import React, { Component } from 'react'
import { Table } from 'reactstrap'


import ConfirmarEliminacionModal from './ConfirmarEliminacionModal'
import ModificarRecargaModal from './ModificarRecargaModal'

class ListaRecargas extends Component {
    render() {
        const recargas = this.props.recargas
        return (
            <Table>
                <thead>
                    <tr>
                        {/* <th>Id Detalle Recarga</th> */}
                        <th>Nombre del Producto</th>
                        {/* <th>Id recarga</th> */}
                        <th>Cantidad</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!recargas || recargas.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>No hay recargas registradas.</b>
                            </td>
                        </tr>
                    ) : (
                        recargas.map(recarga => (
                            <tr key={recarga.idDetalleRecarga}>
                                <td>{recarga.idProductos__NombreProducto}</td>
                                {/* <td>{recarga.idRecarga}</td> */}
                                <td>{recarga.cantidad}</td>
                                <td align="center">
                                    <ModificarRecargaModal recarga={recarga} resetState={this.props.resetState}/>
                                    &nbsp;&nbsp;
                                    <ConfirmarEliminacionModal id={recarga.cantidad} resetState={this.props.resetState}/> 
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        )
    }
}

export default ListaRecargas