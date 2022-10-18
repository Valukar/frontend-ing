import React, { Component, Fragment} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import NuevoEmpleado from './NuevoEmpleado'

class NuevoEmpleadoModal extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }))
    }

    render() {
            var titulo = "Añadiendo Empleado"
            var boton = (<Button color="orange" className="float-right" onClick={this.toggle} style= {{ minWidth: "200px" }}>Añadir</Button>)
        return (
            <Fragment>
                {boton}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{titulo}</ModalHeader>
                    <ModalBody>
                        <NuevoEmpleado resetState={this.props.resetState} toggle={this.toggle} empleado={this.props.empleado}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default NuevoEmpleadoModal