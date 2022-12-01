import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class Nuevadetallere extends React.Component {
    state = { 
    
        idDetalleRecarga:"",
        cantidad: "",
        idProductos: 0,
        idRecargas: "",
        

    };

componentDidMount() {
    if (this.props.recarga) {
        const { idDetalleRecarga, cantidad, idProductos, idRecargas} = this.props.recarga;
        this.setState({ idDetalleRecarga, cantidad, idProductos,idRecargas})
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

crearRecarga = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/Inventario_detalles_descarga/', this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}


valorDefault = value => {
    return value === "" ? "" : value;
}

render() {
    

    return( 
        <Form onSubmit={this.crearRecarga}>
            <FormGroup>
                <Label for="idProductos">nombre producto:</Label>
                <Input type="select" name="idProductos" onChange={this.onChange} value={this.valorDefault(this.state.idProductos)}>
                <option >Seleccione una opción</option>
                    <option value="9">Galón de 15 kilos</option>
                    <option value="5">Galón de 45 kilos</option>
                    <option value="7">Galón de 90 kilos</option> 
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="cantidad">Cantidad:</Label>
                <Input type="text" name="cantidad" onChange={this.onChange} value={this.valorDefault(this.state.cantidad)}/>
            </FormGroup>
            <FormGroup>
                <Label for="idRecargas">ID recarga:</Label>
                <Input type="text" name="idRecargas" onChange={this.onChange} value={this.valorDefault(this.state.idRecargas)}/>
            </FormGroup>
            <Button>Confirmar</Button>
        </Form>

    )
}

}

export default Nuevadetallere