import React, { Component, Fragment} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import ModificarRecarga from './ModificarRecarga'


class ModificarRecargaModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    render() {
        var titulo = "Modificando Recarga"
        var boton = <Button onClick={this.toggle}>Modificar</Button>
        return (
            <Fragment>
                {boton}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{titulo}</ModalHeader>
                    <ModalBody>
                        <ModificarRecarga resetState={this.props.resetState} toggle={this.toggle} recarga={this.props.recarga}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default ModificarRecargaModal