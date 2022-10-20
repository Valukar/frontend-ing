import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class NuevoInventario extends React.Component {
    state = {

        NombreProducto:"",
        stock: "",
        precio: "",

    };

componentDidMount() {
    if (this.props.inventario) {
        const { NombreProducto, stock, precio } = this.props.inventario;
        this.setState({ NombreProducto, stock, precio })
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

crearInventario = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/Inventario/', this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}


valorDefault = value => {
    return value === "" ? "" : value;
}

render() {
    return(
        <Form onSubmit={this.crearInventario}>
            <FormGroup>
                <Label for="NombreProducto">Nombre Producto:</Label>
                <Input type="text" name="NombreProducto" onChange={this.onChange} value={this.valorDefault(this.state.NombreProducto)}/>
            </FormGroup>
            <FormGroup>
                <Label for="stock">Stock:</Label>
                <Input type="text" name="stock" onChange={this.onChange} value={this.valorDefault(this.state.stock)}/>
            </FormGroup>
            <FormGroup>
                <Label for="precio">Precio:</Label>
                <Input type="text" name="precio" onChange={this.onChange} value={this.valorDefault(this.state.precio)}/>
            </FormGroup>
            <Button>Confirmar</Button>
        </Form>

    )
}

}

export default NuevoInventario