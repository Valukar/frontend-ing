import React, { Component, Fragment} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import ModificarPedidoAc from './ModificarPedidoAc'

class ModificarPedidoAcModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    render() {
        var titulo = "Modificando Pedido"
        var boton = <Button onClick={this.toggle}>Modificar Pedido</Button>
        return (
            <Fragment>
                {boton}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{titulo}</ModalHeader>
                    <ModalBody>
                        <ModificarPedidoAc resetState={this.props.resetState} toggle={this.toggle} PedidoAc={this.props.pedidoAc}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default ModificarPedidoAcModal