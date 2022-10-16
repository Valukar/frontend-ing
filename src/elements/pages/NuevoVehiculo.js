import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class NuevoVehiculo extends React.Component {
    state = {
        patente: "",
        fechaRevision: "",
    };

componentDidMount() {
    if (this.props.vehiculo) {
        const { patente, fechaRevision } = this.props.vehiculo;
        this.setState({ patente, fechaRevision })
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

crearVehiculo = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/vehiculo/', this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

editarVehiculo = e => {
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/vehiculo/' + this.state.patente, this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

valorDefault = value => {
    return value === "" ? "" : value;
}

render() {
    return(
        <Form onSubmit={this.props.vehiculo ? this.editarVehiculo : this.crearVehiculo}>
            <FormGroup>
                <Label for="nombre">Patente:</Label>
                <Input type="text" name="patente" onChange={this.onChange} value={this.valorDefault(this.state.patente)}/>
            </FormGroup>
            <FormGroup>
                <Label for="telefono">Fecha de Revisión Técnica:</Label>
                <Input type="text" name="fechaRevision" onChange={this.onChange} value={this.valorDefault(this.state.fechaRevision)}/>
            </FormGroup>
            <Button>Confirmar</Button>
        </Form>
    )
}
}

export default NuevoVehiculo