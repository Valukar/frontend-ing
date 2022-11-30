import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Button, Navbar } from 'reactstrap';


class Dashboard extends Component {
    render() {
        return (

           

            <div class="pos-f-t">
     
                <div class="collapse" id="navbarToggleExternalContent">
                    
                    <div class="bg-dark p-4">
                        
                        
                        <h4 class="text-white">Administrador</h4>
                        <img src="loading.png"></img>
                        
                        <span class="text-muted"></span>
                        <Fragment>

                            <Link to="/empleado">
                            <button class="btn btn-outline-success" type="button">Empleado
                            </button>{' '}
                            </Link>
                        </Fragment>
                        <Fragment>

                            <Link to="/inventario">
                            <button class="btn btn-outline-success" type="button">Inventario
                            </button>{' '}
                            </Link>
                        </Fragment>
                        <Fragment>

                            <Link to="/pedidos">
                            <button class="btn btn-outline-success" type="button">Pedidos
                            </button>{' '}
                            </Link>
                        </Fragment>
                        <Fragment>

                            <Link to="/vehiculos">
                            <button class="btn btn-outline-success" type="button">Vehiculos
                            </button>{' '}
                            </Link>
                        </Fragment>
                        <Fragment>

                            <Link to="/login">
                            <button class="btn btn-outline-success" type="button">login
                            </button>{' '}
                            </Link>
                        </Fragment>
                        <Fragment>

                            <Link to="/pedidos/activo">
                            <button class="btn btn-outline-success" type="button">pedidos activos
                            </button>{' '}
                            </Link>
                        </Fragment>
                        <Fragment>

                            <Link to="/reporte">
                            <button class="btn btn-outline-success" type="button">Reporte recargas
                            </button>{' '}
                            </Link>
                        </Fragment>

                        
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                </nav>
                <img src="bg.png"></img>
            </div>
                

        )
    }
}

export default Dashboard
//             <>
//             <Fragment>

//                 <Link to="/empleado">
//                 <Button color="primary" className="float-right"  style= {{ minWidth: "100px" }}>Empleado
//                 </Button>{' '}
//                 </Link>
//             </Fragment>

//             <Fragment>
//                 <Link to="/inventario">
//                 <Button color="primary" className="float-right"  style= {{ minWidth: "100px" }}>Inventario
//                 </Button>{' '}
//                 </Link>
//             </Fragment>

//             <Fragment>
//                 <Link to="/pedidos">
//                 <Button color="primary" className="float-right"  style= {{ minWidth: "100x" }}>Pedidos
//                 </Button>{' '}
//                 </Link>
//             </Fragment>

//             <Fragment>
//                 <Link to="/vehiculos">
//                 <Button color="primary" className="float-right"  style= {{ minWidth: "100px" }}>Vehiculos
//                 </Button>{' '}
//                 </Link>
//             </Fragment>
//         </>
//         )
//     }
// }

// export default Dashboard