import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import ListaRecargas from './ListaRecargas'
import NuevaRecargaModal from './NuevaRecargaModal'

import axios from 'axios'

class Recargas extends Component {
    state = {
        recargas: []
    }

    componentDidMount() {
        this.resetState()
    }

    getRecargas = () => {
        axios.get('http://127.0.0.1:8000/Inventario_recarga/').then(res => this.setState({ recargas: res.data }))
    }

    resetState = () => {
        this.getRecargas()
    }

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <a href="javascript:history.back()"> Volver Atrás</a>
                <Row>
                    <Col>
                        <ListaRecargas recargas={this.state.recargas} resetState={this.resetState}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NuevaRecargaModal resetState={this.resetState}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Recargas