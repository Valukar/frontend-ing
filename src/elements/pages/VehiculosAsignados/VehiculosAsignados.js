import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import axios from 'axios'
import NuevoVehiculoModal from './NuevoVehiculoModal'
import ListaVehiculosAsignados from './ListaVehiculosAsignados'

class VehiculosAsignados extends Component {
    state = {
        vehiculosOp: []
    }

    componentDidMount() {
        this.resetState()
    }

    getVehiculosOp = () => {
        axios.get('http://127.0.0.1:8000/VehiculoOperativo/').then(res => this.setState({ vehiculosOp: res.data })) 
    }

    resetState = () => {
        this.getVehiculosOp()
    }

    render() {
        return (
            <>
            <Container style={{ marginTop: "20px" }}>
                <a href="javascript:history.back()"> Volver Atrás</a>
                <Row>
                    <Col>
                        <ListaVehiculosAsignados vehiculosOp={this.state.vehiculosOp} resetState={this.resetState}/>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default VehiculosAsignados