import React, { Component, Fragment} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import ModificarEmpleado from './ModificarEmpleado'


class ModificarEmpleadoModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    render() {
        var titulo = "Modificando Empleado"
        var boton = <Button onClick={this.toggle}>Modificar</Button>
        return (
            <Fragment>
                {boton}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{titulo}</ModalHeader>
                    <ModalBody>
                        <ModificarEmpleado resetState={this.props.resetState} toggle={this.toggle} empleado={this.props.empleado}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default ModificarEmpleadoModal