import React, { Component, Fragment} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import NuevoVehiculo from './NuevoVehiculo'

class NuevoVehiculoModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    render() {
        var titulo = "Añadir Vehiculo"
        var boton = (<Button color="primary" className="float-right" onClick={this.toggle} style= {{ minWidth: "200px" }}>Añadir</Button>)
        return (
            <Fragment>
                {boton}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{titulo}</ModalHeader>
                    <ModalBody>
                        <NuevoVehiculo resetState={this.props.resetState} toggle={this.toggle} vehiculo={this.props.vehiculo}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default NuevoVehiculoModal