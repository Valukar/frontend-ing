import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import axios from 'axios'
import ListaReporteRecarga from './ListarReporteRecarga'


class Reporterecarga extends Component {
    state = {
        inventario_f: []
    }

    componentDidMount() {
        this.resetState()
    }

    getInventario = () => {
        axios.get('http://127.0.0.1:8000/reporte_recargas/').then(res => this.setState({ inventario_f: res.data }))
    }

    resetState = () => {
        this.getInventario()
    }

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <a href="javascript:history.back()"> Volver Atrás</a>
                <Row>
                    <Col>
                        <ListaReporteRecarga inventario_f={this.state.inventario_f} resetState={this.resetState}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Reporterecarga