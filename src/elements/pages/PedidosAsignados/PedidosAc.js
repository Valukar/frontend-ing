import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import axios from 'axios'

import ListaPedidosAc from './ListarPedidosAc'

class pedidoAc extends Component {
    state = {
        pedidoAc: []
    }

    componentDidMount() {
        this.resetState()
    }

    getpedidoAc = () => {
        axios.get('http://127.0.0.1:8000/VehiculoOperativo/').then(res => this.setState({ pedidoAc: res.data })) 
    }

    resetState = () => {
        this.getpedidoAc()
    }

    render() {
        return (
            <>
            <Container style={{ marginTop: "20px" }}>
                <a href="javascript:history.back()"> Volver Atrás</a>
                <Row>
                    <Col>
                        <ListaPedidosAc pedidoAc={this.state.pedidoAc} resetState={this.resetState}/>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default pedidoAc