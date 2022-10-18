import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class ModificarEmpleado extends React.Component {
    state = {
        id: 0,
        contrasena: "",
        rol: "",
        tipoContrato: "",
        estadoLaboral: "",
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

editarEmpleado = e => {
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/crear_empleado/' + this.state.id, this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

valorDefault = value => {
    return value === "" ? "" : value;
}

render() {
    return(
        <Form onSubmit={this.editarEmpleado}>
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
                <Input type="select" name="rol" onChange={this.onChange} value={this.valorDefault(this.state.rol)}>
                    <option>Administrador</option>
                    <option>Repartidor</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="tipoContrato">Tipo de Contrato:</Label>
                <Input type="select" name="tipoContrato" onChange={this.onChange} value={this.valorDefault(this.state.tipoContrato)}>
                    <option>Indefinido</option>
                    <option>Termino fijo</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="estadoLaboral">Estado Laboral:</Label>
                <Input type="select" name="estadoLaboral" onChange={this.onChange} value={this.valorDefault(this.state.estadoLaboral)}>
                    <option>Activo</option>
                    <option>Inactivo</option>
                </Input>
            </FormGroup>
            <Button>Confirmar</Button>
        </Form>
    )
}
}

export default ModificarEmpleado