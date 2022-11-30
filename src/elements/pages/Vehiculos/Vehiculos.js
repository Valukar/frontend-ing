import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'

import axios from 'axios'
import ListaVehiculos from './ListaVehiculos'
import NuevoVehiculoModal from './NuevoVehiculoModal'
import { Link } from 'react-router-dom'

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
            <>
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


                <Fragment>
                
                    <Link to="/vehiculos/asignados">
                        <Button color="success" className="float-left"  style= {{ minWidth: "100px" }}>Vehiculos Asignados
                        </Button>{' '}
                    </Link>
                </Fragment>

            </Container>
            
            </>
        )
    }
}

export default Vehiculos