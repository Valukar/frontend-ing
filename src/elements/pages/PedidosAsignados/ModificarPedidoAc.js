import React from "react"
import axios from 'axios'

class ModificarPedidoAc extends React.Component{
    state = {
        patente: "",
        pedido: "",
    }

    componentDidMount() {
        if (this.props.pedidoAc){
            const { patente, pedido } = this.props.pedidoAc;
            this.setState({ patente, pedido });
        }
    }

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

editarPedido = e => {
    e.preventDefault();
    axios.put('' + this.state.patente, this.state).then(() => {
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