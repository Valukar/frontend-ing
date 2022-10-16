import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap'

import axios from 'axios'
import ListaPedidos from './ListaPedidos'
import NuevoPedidoModal from './NuevoPedidoModal'

class Pedidos extends Component {
    state = {
        pedidos: []
    }

    componentDidMount() {
        this.resetState()
    }

    getPedidos = () => {
        axios.get('http://127.0.0.1:8000/pedido/').then(res => this.setState({ pedidos: res.data }))
    }

    resetState = () => {
        this.getPedidos()
    }

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col>
                        <ListaPedidos pedidos={this.state.pedidos} resetState={this.resetState}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NuevoPedidoModal create={true} resetState={this.resetState}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Pedidos