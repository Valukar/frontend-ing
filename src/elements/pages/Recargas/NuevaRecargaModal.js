import React, { Component, Fragment} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import NuevaRecarga from './NuevaRecarga'

class NuevaRecargaModal extends Component {
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

        var titulo = "Modificando Recarga"
        var boton = <Button onClick={this.toggle}>Modificar</Button>
        if (create) {
            titulo = "Añadiendo Recarga"
            boton = (<Button color="primary" className="float-right" onClick={this.toggle} style= {{ minWidth: "200px" }}>Añadir</Button>)
        }
        return (
            <Fragment>
                {boton}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{titulo}</ModalHeader>
                    <ModalBody>
                        <NuevaRecarga resetState={this.props.resetState} toggle={this.toggle} inventario={this.props.inventario}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default NuevaRecargaModal