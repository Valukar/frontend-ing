import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import axios from 'axios'
import ListaVehiculos from './ListaVehiculos'
import NuevoVehiculoModal from './NuevoVehiculoModal'

class Vehiculos extends Component {
    state = {
        vehiculos: []
    }

    componentDidMount() {
        this.resetState()
    }

    getVehiculos = () => {
        axios.get('http://127.0.0.1:8000/InsertarVehiculo/').then(res => this.setState({ vehiculos: res.data }))
    }

    resetState = () => {
        this.getVehiculos()
    }

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <a href="javascript:history.back()"> Volver Atrás</a>
                <Row>
                    <Col>
                        <ListaVehiculos vehiculos={this.state.vehiculos} resetState={this.resetState}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NuevoVehiculoModal resetState={this.resetState}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Vehiculos