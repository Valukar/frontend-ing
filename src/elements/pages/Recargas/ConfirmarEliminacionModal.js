import React, { Component, Fragment } from 'react'
import { Modal, ModalHeader, Button, ModalFooter } from 'reactstrap'


import axios from 'axios'


class ConfirmarEliminacionModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    eliminarRecarga = id => {
        axios.delete('http://127.0.0.1:8000/Inventario_recarga/' + id).then(() => {
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
                        Confirmar eliminacion. 
                    </ModalHeader> 
                    <ModalFooter>
                        <Button type="button" onClick={() => this.toggle()}>Cancelar</Button>
                        <Button type="button" color="primary" onClick={() => this.eliminarEmpleado(this.props.id)}>Aceptar</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        )
    }
}

export default ConfirmarEliminacionModal
