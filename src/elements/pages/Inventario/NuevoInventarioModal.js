import React, { Component, Fragment} from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import NuevoInventario from './NuevoInventario'

class NuevoInventarioModal extends Component {
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

        var titulo = "Modificando Inventario"
        var boton = <Button onClick={this.toggle}>Modificar</Button>
        if (create) {
            titulo = "Añadiendo inventario"
            boton = (<Button color="orange" className="float-right" onClick={this.toggle} style= {{ minWidth: "200px" }}>Añadir</Button>)
        }
        return (
            <Fragment>
                {boton}
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{titulo}</ModalHeader>
                    <ModalBody>
                        <NuevoInventario resetState={this.props.resetState} toggle={this.toggle} inventario={this.props.inventario}/>
                    </ModalBody>
                </Modal>
            </Fragment>
        )
    }
}

export default NuevoInventarioModal