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
        Rut: "",
        nombre: ""
    };

componentDidMount() {
    if (this.props.empleado) {
        const { id, contrasena, rol, tipoContrato, estadoLaboral, Rut, nombre } = this.props.empleado;
        this.setState({ id, contrasena, rol, tipoContrato, estadoLaboral, Rut, nombre })
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
                <Label for="Rut">RUT:</Label>
                <Input type="text" name="Rut" onChange={this.onChange} value={this.valorDefault(this.state.Rut)}/>
            </FormGroup>
            <FormGroup>
                <Label for="contrasena">Contraseña:</Label>
                <Input type="text" name="contrasena" onChange={this.onChange} value={this.valorDefault(this.state.contrasena)}/>
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
                <Input type="text" name="estadoLaboral" onChange={this.onChange} value={this.valorDefault(this.state.estadoLaboral)}/>
            </FormGroup>
            <Button>Confirmar</Button>
        </Form>
    )
}
}

export default ModificarEmpleado