import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import axios from 'axios'
import ListaVehiculos from './ListaVehiculos'
import NuevoVehiculoModal from './NuevoVehiculoModal'
import ListaVehiculosAsignados from './ListaVehiculosAsignados'

class Vehiculos extends Component {
    state = {
        vehiculos: [],
        vehiculosAsignados: []
    }

    componentDidMount() {
        this.resetState()
        this.resetState2()
    }

    getVehiculos = () => {
        axios.get('http://127.0.0.1:8000/vehiculo/').then(res => this.setState({ vehiculos: res.data }))
    }

    getVehiculosAsignados = () => {
        axios.get('http://127.0.0.1:8000/vehiculo_asignado/').then(res => this.setState({ vehiculosAsignados: res.data }))
    }

    resetState = () => {
        this.getVehiculos()
    }

    resetState2 = () => {
        this.getVehiculosAsignados()
    }

    render() {
        return (
            <>
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <ListaVehiculos vehiculos={this.state.vehiculos} resetState={this.resetState}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NuevoVehiculoModal create={true} resetState={this.resetState}/>
                    </Col>
                </Row>
                
            </Container>
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <ListaVehiculosAsignados vehiculosAsignados={this.state.vehiculosAsignados} resetState2={this.resetState2}/>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default Vehiculos