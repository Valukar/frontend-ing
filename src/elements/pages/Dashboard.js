import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
    render() {
        return (
            <>
            <Fragment>
                <Link to="/empleado">Empleado</Link>
            </Fragment>
            <Fragment>
                <Link to="/inventario">Inventario</Link>
            </Fragment>
            <Fragment>
                <Link to="/pedidos">Pedidos</Link>
            </Fragment>
            <Fragment>
                <Link to="/vehiculos">Vehiculos</Link>
            </Fragment>
        </>
        )
    }
}

export default Dashboard