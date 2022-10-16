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
        const create = this.props.create

        var titulo = "Modificando Vehículo"
        var boton = <Button onClick={this.toggle}>Modificar</Button>
        if (create) {
            titulo = "Añadiendo Vehículo"
            boton = (<Button color="orange" className="float-right" onClick={this.toggle} style= {{ minWidth: "200px" }}>Añadir</Button>)
        }
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