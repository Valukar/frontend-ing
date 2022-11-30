import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class ModificarRecarga extends React.Component {
    state = {
        idDetalleRecarga: 0,
        idProductos: 0,
        idRecarga: 0,
        cantidad: "",
    };

componentDidMount() {
    if (this.props.recarga) {
        const { idDetalleRecarga, idProductos, idRecarga,  cantidad } = this.props.recarga;
        this.setState({ idDetalleRecarga, idProductos, idRecarga, cantidad })
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

editarRecarga = e => {
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/Inventario_recarga/' + this.state.id, this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

valorDefault = value => {
    return value === "" ? "" : value;
}

render() {
    return(
        <Form onSubmit={this.editarRecarga}>
            <FormGroup>
                <Label for="cantidad">Cantidad:</Label>
                <Input type="text" name="cantidad" onChange={this.onChange} value={this.valorDefault(this.state.rut)}/>
            </FormGroup>

            

            <Button>Confirmar</Button>
        </Form>
    )
}
}

export default ModificarRecarga