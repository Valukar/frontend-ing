import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class ModificarFechaMantencion extends React.Component {
    state = {
        patente: 0,
        fechaMantencion: "",
        rut: "",
    };

componentDidMount() {
    if (this.props.vehiculoAsignado) {
        const { patente, fechaMantencion, rut } = this.props.vehiculoAsignado;
        this.setState({ patente, fechaMantencion, rut })
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

editarEmpleado = e => {
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/vehiculo_asignado/' + this.state.patente, this.state).then(() => {
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
                <Label for="fechaMantencion">Fecha Mantención:</Label>
                <Input type="text" name="fechaMantencion" onChange={this.onChange} value={this.valorDefault(this.state.fechaMantencion)}/>
            </FormGroup>
            <Button>Confirmar</Button>
        </Form>
    )
}
}

export default ModificarFechaMantencion