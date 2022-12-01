import { Component } from "react"
import { Table } from "reactstrap"

class ListaDetalleRecarga extends Component {
    render() {
        const recargas = this.props.recargas
        return ( 
            <Table>
                <thead>
                    <tr>
                        {/* <th>Id Detalle Recarga</th> */}
                        <th>cantidad</th>
                        <th>id Productos</th>
                        <th>Id Recargas</th> 
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
                                <td>{recarga.cantidad}</td>
                                <td>{recarga.idProductos}</td> 
                                <td>{recarga.idRecargas}</td> 
                                <td align="center">
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </Table>
        )
    }
}

export default ListaDetalleRecarga