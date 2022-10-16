import React, { Component, Fragment } from 'react'
import { Modal, ModalHeader, Button, ModalFooter } from 'reactstrap'

import axios from 'axios'

class ConfirmarEliminacionModalInventario extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    eliminarInventario = id => {
        axios.delete('http://127.0.0.1:8000/crear_inventario/' + id).then(() => {
            this.props.resetState()
            this.toggle()
        })
    }

    render() {
        return (
            <Fragment>
                <Button color="danger" onClick={() => this.toggle()}>Eliminar</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Confirmar eliminacion de inventario. 
                    </ModalHeader> 
                    <ModalFooter>
                        <Button type="button" onClick={() => this.toggle()}>Cancelar</Button>
                        <Button type="button" color="primary" onClick={() => this.eliminarInventario(this.props.id_producto)}>Aceptar</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        )
    }
}

export default ConfirmarEliminacionModalInventario