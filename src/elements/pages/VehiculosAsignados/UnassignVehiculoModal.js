import React, { Component, Fragment } from 'react'
import { Modal, ModalHeader, Button, ModalFooter } from 'reactstrap'

import axios from 'axios'

class UnassignVehiculoModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    eliminarVehiculo = IdVehiculo => {
        axios.delete('http://127.0.0.1:8000/VehiculoOperativo/' + IdVehiculo).then(() => {
            this.props.resetState()
            this.toggle()
        })
    }

    render() {
        return (
            <Fragment>
                <Button color="danger" onClick={() => this.toggle()}>Desvincular Vehiculo</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Confirmar desvinculación de Vehiculo. 
                    </ModalHeader> 
                    <ModalFooter>
                        <Button type="button" onClick={() => this.toggle()}>Cancelar</Button>
                        <Button type="button" color="primary" onClick={() => this.eliminarVehiculo(this.props.IdVehiculo)}>Aceptar</Button>
                    </ModalFooter>
                </Modal>
            </Fragment>
        )
    }
}

export default UnassignVehiculoModal