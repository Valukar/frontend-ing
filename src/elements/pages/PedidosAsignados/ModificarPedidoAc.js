import React from "react"
import axios from 'axios'
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

class ModificarPedidoAc extends React.Component{
    state = {
        idPedidoActivo:"",
        patente: "",
        pedido: "",
    }

    componentDidMount() {
        if (this.props.pedidoAc){
            const { idPedidoActivo,patente, pedido } = this.props.pedidoAc;
            this.setState({ idPedidoActivo,patente, pedido });
        }
    }

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

editarPedido = e => {
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/pedido_ac/' + this.state.patente, this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

valorDefault = value => {
    return value === "" ? "" : value;
}

render () {
    return(
        <Form onSubmit={this.editarPedido}>
            <FormGroup>
                <Label for="pedido">Pedido activos:</Label> 
                <Input type="date" name="pedido" onChange={this.onChange} value={this.valorDefault(this.state.pedido)}/>
            </FormGroup>
            <Button>Aceptar</Button>
        </Form>
    )
}
}

export default ModificarPedidoAc