import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class NuevoPedido extends React.Component{
    state = {
        id: 0,
        direccion: "",
        comentario: "",
        estado_pedido: "",
    };


componentDidmount() {
    if (this.prop.pedido){
        const {id, direccion, comentario, estado_pedido} = this.prop.pedido;
        this.setState({ pk, direccion, comentario, estado_pedido });
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

crearPedido = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/crear_pedido/', this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

editarPedido = e => {
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/crear_pedido/' + this.state.id, this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

valorDefault = value => {
    return value === "" ? "" : value;
}

render () {
    return(
        <Form onSubmit={this.props.pedido ? this.editarPedido : this.crearPedido}>
            <FormGroup>
                <Label for="direccion">Direccion:</Label>
                <Input type="text" name="direccion" onChange={this.onChange} value={this.valorDefault(this.state.direccion)}/>
            </FormGroup>
            <FormGroup>
                <Label for="comentario">Comentario del pedido:</Label>
                <Input type="text" name="comentario" onChange={this.onChange} value={this.valorDefault(this.state.comentario)}/>
            </FormGroup>
            <FormGroup>
                <Label for="estado">Estado del pedido:</Label> 
                <Input type="text" name="estado_pedido" onChange={this.onChange} value={this.valorDefault(this.state.estado_pedido)}/>
            </FormGroup>
            <Button>Confirmar Registro de pedido</Button>
        </Form>
    )
}
}

export default NuevoEmpleado

/* por si acaso, por el momento dejo el estado del pedido como algo manual, pero recuerdo que esa madre debe ser automatica
por si acaso para que en un futuro se deba modificar*/