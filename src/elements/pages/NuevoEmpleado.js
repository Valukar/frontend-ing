import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class NuevoEmpleado extends React.Component {
    state = {
        pk: 0,
        nombre: "",
        telefono: "",
        tipoContrato: "",
        estadoLaboral: "",
    };

componentDidMount() {
    if (this.props.empleado) {
        const { pk, nombre, telefono, tipoContrato, estadoLaboral } = this.props.empleado;
        this.setState({ pk, nombre, telefono, tipoContrato, estadoLaboral })
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

crearEmpleado = e => {
    e.preventDefault();
    axios.post(url, this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

editarEmpleado = e => {
    e.preventDefault();
    axios.put(url + this.state.pk, this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

valorDefault = value => {
    return value === "" ? "" : value;
}

render() {
    return(
        <Form onSubmit={this.props.empleado ? this.editarEmpleado : this.crearEmpleado}>
            <FormGroup>
                <Label for="nombre">Nombre:</Label>
                <Input type="text" name="nombre" onChange={this.onChange} value={this.valorDefault(this.state.nombre)}/>
            </FormGroup>
            <FormGroup>
                <Label for="telefono">Telefono:</Label>
                <Input type="text" name="telefono" onChange={this.onChange} value={this.valorDefault(this.state.telefono)}/>
            </FormGroup>
            <FormGroup>
                <Label for="tipoContrato">Tipo de Contrato:</Label>
                <Input type="text" name="tipoContrato" onChange={this.onChange} value={this.valorDefault(this.state.tipoContrato)}/>
            </FormGroup>
            <FormGroup>
                <Label for="estadoLaboral">Estado Laboral:</Label>
                <Input type="text" name="estadoLaboral" onChange={this.onChange} value={this.valorDefault(this.state.estadoLaboral)}/>
            </FormGroup>
            <Button>Agregar Empleado</Button>
        </Form>
    )
}
}

export default NuevoEmpleado