import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class NuevoPedido extends React.Component{
    state = {
        idPedido: 0,
        direccion: "",
        comentario: "",
        estado: "Pendiente",
    
    };


componentDidMount() {
    if (this.props.pedido){
        const {idPedido, direccion, comentario, estado} = this.props.pedido;
        this.setState({ idPedido, direccion, comentario, estado});
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

crearPedido = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/Pedido/', this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}



valorDefault = value => {
    return value === "" ? "" : value;
}

render () {
    return(
        <Form onSubmit={this.crearPedido}>
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
                <Input type="text" disabled={true} name="estado" onChange={this.onChange} value={this.valorDefault(this.state.estado)}/>
            </FormGroup>
            <Button>Confirmar Registro de pedido</Button>
        </Form>
    )
}
}

export default NuevoPedido

/* por si acaso, por el momento dejo el estado del pedido como algo manual, pero recuerdo que esa madre debe ser automatica
por si acaso para que en un futuro se deba modificar*/