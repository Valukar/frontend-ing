import React, { Component, Fragment } from "react";

import { HtmlHTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Navbar } from 'reactstrap';


class Dashboard extends Component {
    render() {
        return (
            
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4 d-grid gap-4" >
                                                                                            
                        <div>
                        
                            <h1 class="text-white">Administrador</h1>{' '}
                            <img src="loading.png" class="img-fluid" alt="Responsive image "></img>{' '}
                        
                        </div>
                        
                        <div class="d-grid gap-4 d-md-flex">
                        
                            <Link to="/empleado">
                                <button class="btn btn-outline-success" type="button">Empleado
                                </button>{' '}
                            </Link>

                            <Link to="/inventario">
                                <button class="btn btn-outline-success" type="button">Inventario
                                </button>{' '}
                            </Link>

                            <Link to="/pedidos">
                                <button class="btn btn-outline-success" type="button">Pedidos
                                </button>{' '}
                            </Link>

                            <Link to="/vehiculos">
                                <button class="btn btn-outline-success" type="button">Vehiculos
                                </button>{' '}
                            </Link>

                            <Link to="/login">
                                <button class="btn btn-outline-success" type="button">login
                                </button>{' '}
                            </Link>
                       
                            <Link to="/pedidos/activo">
                                <button class="btn btn-outline-success" type="button">pedidos activos
                                </button>{' '}
                            </Link>
                        

                            {/* <Link to="/reporte">
                                <button class="btn btn-outline-success" type="button">Reporte recargas
                                </button>{' '}
                            </Link>
                            
                            <Link to="/reporte/ventas">
                                <button class="btn btn-outline-success" type="button">Reporte ventas
                                </button>{' '}
                            </Link> */}
                           
                               
                            <div class="btn-group" role="group">
                                <button id="btnGroupDrop1" type="button" class="btn btn-outline-success" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Reportes
                                </button>
                                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                <a class="dropdown-item" href="/reporte">Reporte Vehículos</a>
                                <a class="dropdown-item" href="/reporte/ventas">Reporte Ventas</a>
                                </div>
                            </div>
                         

                            <Link to="/Inventario_recarga">
                                <button class="btn btn-outline-success" type="button">Recargas
                                </button>{' '}
                            </Link>
                            
                            <Link to="/detalle_recarga">
                                <button class="btn btn-outline-success" type="button">detalle recarga
                                </button>{' '}
                            </Link>
                   
                            
                        
                        </div>

                            
                    </div>
                                                                                  
                </div>                    

               
            
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <div class="text-center" >
                        <img src="bg.png" class="img-fluid" alt="Responsive image"></img>
                </div>
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