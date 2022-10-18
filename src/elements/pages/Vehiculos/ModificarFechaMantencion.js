import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class ModificarVehiculo extends React.Component{
    state = {
        patente: "",
        fechaRevision: "",
    };


    componentDidMount() {
        if (this.props.vehiculo){
            const { patente, fechaRevision } = this.props.vehiculo;
            this.setState({ patente, fechaRevision });
        }
    }

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}


editarVehiculo = e => {
    e.preventDefault();
    axios.put('http://127.0.0.1:8000/InsertarVehiculo/' + this.state.patente, this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}

valorDefault = value => {
    return value === "" ? "" : value;
}

render () {
    return(
        <Form onSubmit={this.editarVehiculo}>
            <FormGroup>
                <Label for="fechaRevision">Fecha de revisión técnica:</Label> 
                <Input type="text" name="fechaRevision" onChange={this.onChange} value={this.valorDefault(this.state.fechaRevision)}/>
            </FormGroup>
            <Button>Aceptar</Button>
        </Form>
    )
}
}

export default ModificarVehiculo