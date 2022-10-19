import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';


class Dashboard extends Component {
    render() {
        return (
            <>
            <Fragment>

                <Link to="/empleado">
                <Button color="primary" className="float-right"  style= {{ minWidth: "100px" }}>Empleado
                </Button>{' '}
                </Link>
            </Fragment>

            <Fragment>
                <Link to="/inventario">
                <Button color="primary" className="float-right"  style= {{ minWidth: "100px" }}>Inventario
                </Button>{' '}
                </Link>
            </Fragment>

            <Fragment>
                <Link to="/pedidos">
                <Button color="primary" className="float-right"  style= {{ minWidth: "100x" }}>Pedidos
                </Button>{' '}
                </Link>
            </Fragment>

            <Fragment>
                <Link to="/vehiculos">
                <Button color="primary" className="float-right"  style= {{ minWidth: "100px" }}>Vehiculos
                </Button>{' '}
                </Link>
            </Fragment>
        </>
        )
    }
}

export default Dashboard