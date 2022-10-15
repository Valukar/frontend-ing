import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import ListaEmpleados from './ListaEmpleados'
import NuevoEmpleadoModal from './NuevoEmpleadoModal'

import axios from 'axios'

class Dashboard extends Component {
    state = {
        empleados: []
    }

    componentDidMount() {
        this.resetState()
    }

    getEmpleados = () => {
        axios.get(url).then(res => this.setState({ empleados: res.data }))
    }

    resetState = () => {
        this.getEmpleados()
    }

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <ListaEmpleados empleados={this.state.students} resetState={this.resetState}/>
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

export default Dashboard