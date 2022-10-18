import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class NuevoEmpleado extends React.Component {
    state = {
        id: 0,
        contrasena: "",
        rol: "",
        tipoContrato: "",
        estadoLaboral: "Activo",
        rut: "",
        nombre: ""
    };

componentDidMount() {
    if (this.props.empleado) {
        const { id, contrasena, rol, tipoContrato, estadoLaboral, rut, nombre } = this.props.empleado;
        this.setState({ id, contrasena, rol, tipoContrato, estadoLaboral, rut, nombre })
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

crearEmpleado = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/crear_empleado/', this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

valorDefault = value => {
    return value === "" ? "" : value;
}

render() {
    return(
        <Form onSubmit={this.crearEmpleado}>
            <FormGroup>
                <Label for="rut">RUT:</Label>
                <Input type="text" name="rut" onChange={this.onChange} value={this.valorDefault(this.state.rut)}/>
            </FormGroup>
            <FormGroup>
                <Label for="nombre">Nombre:</Label>
                <Input type="text" name="nombre" onChange={this.onChange} value={this.valorDefault(this.state.nombre)}/>
            </FormGroup>
            <FormGroup>
                <Label for="contrasena">Contraseña:</Label>
                <Input type="password" name="contrasena" onChange={this.onChange} value={this.valorDefault(this.state.contrasena)}/>
            </FormGroup>
            <FormGroup>
                <Label for="rol">Rol:</Label>
                <Input type="text" name="rol" onChange={this.onChange} value={this.valorDefault(this.state.rol)}/>
            </FormGroup>
            <FormGroup>
                <Label for="tipoContrato">Tipo de Contrato:</Label>
                <Input type="text" name="tipoContrato" onChange={this.onChange} value={this.valorDefault(this.state.tipoContrato)}/>
            </FormGroup>
            <FormGroup>
                <Label for="estadoLaboral">Estado Laboral:</Label>
                <Input type="text" name="estadoLaboral" onChange={this.onChange} value={this.valorDefault(this.state.estadoLaboral)} disabled={true}/>
            </FormGroup>
            <Button>Confirmar</Button>
        </Form>
    )
}
}

export default NuevoEmpleado