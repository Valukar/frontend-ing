import React, { Component, Fragment } from 'react'
import { Modal, ModalHeader, Button, ModalFooter } from 'reactstrap'

import axios from 'axios'

class UnassignPedidoAcModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    eliminarPedido = idPedidoActivo => {
        axios.delete('http://127.0.0.1:8000/pedido_ac/' + idPedidoActivo).then(() => {
            this.props.resetState()
            this.toggle()
        })
    }

    render() {
        return (
            <Fragment>
                <Button color="danger" onClick={() => this.toggle()}> eliminar pedidos</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Confirmar eliminacion de pedido 
                    </ModalHeader> 
                    <ModalFooter>
                        <Button type="button" onClick={() => this.toggle()}>Cancelar</Button>
                        <Button type="button" color="primary" onClick={() => this.eliminarPedido(this.props.idPedidoActivo)}>Aceptar</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        )
    }
}

export default UnassignPedidoAcModal