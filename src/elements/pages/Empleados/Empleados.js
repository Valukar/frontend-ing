import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import ListaEmpleados from './ListaEmpleados'
import NuevoEmpleadoModal from './NuevoEmpleadoModal'

import axios from 'axios'

class Empleados extends Component {
    state = {
        empleados: []
    }

    componentDidMount() {
        this.resetState()
    }

    getEmpleados = () => {
        axios.get('http://127.0.0.1:8000/crear_empleado/').then(res => this.setState({ empleados: res.data }))
    }

    resetState = () => {
        this.getEmpleados()
    }

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <ListaEmpleados empleados={this.state.empleados} resetState={this.resetState}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NuevoEmpleadoModal create={true} resetState={this.resetState}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Empleados