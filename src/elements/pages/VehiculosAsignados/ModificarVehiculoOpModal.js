import React, { Component, Fragment} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import ModificarVehiculoOp from './ModificarVehiculoOp'

class ModificarVehiculoOpModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    render() {
        var titulo = "Modificando Vehículo"
        var boton = <Button onClick={this.toggle}>Modificar Vehiculo</Button>
        return (
            <Fragment>
                {boton}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{titulo}</ModalHeader>
                    <ModalBody>
                        <ModificarVehiculoOp resetState={this.props.resetState} toggle={this.toggle} vehiculoOp={this.props.vehiculoOp}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default ModificarVehiculoOpModal