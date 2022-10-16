import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class NuevoInventario extends React.Component {
    state = {
        id_producto: 0,
        stock: "",
        precio: "",

    };

componentDidMount() {
    if (this.props.inventario) {
        const { id_producto, stock, precio } = this.props.inventario;
        this.setState({ pk, stock, precio })
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

crearInventario = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/crear_inventario/', this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

editarInventario = e => {
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/crear_inventario/' + this.state.id, this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

valorDefault = value => {
    return value === "" ? "" : value;
}

render() {
    return(
        <Form onSubmit={this.props.empleado ? this.editarInventario : this.crearInventario}>
            <FormGroup>
                <Label for="id_producto">Id_producto:</Label>
                <Input type="text" name="id_producto" onChange={this.onChange} value={this.valorDefault(this.state.id_producto)}/>
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