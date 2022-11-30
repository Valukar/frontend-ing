import React, { Component } from 'react'
import { Container } from 'reactstrap'

import '../../App.css'


class Login  extends Component{
    render(){
        return (
            <Container>
                <title>Login</title>
                <div>
                    <label for="nombre" >Usuaro:</label>
                    <input for="nombre"> </input>
                </div>
                <div>
                    <label for="clave" >contraseña:</label>
                    <input for="clave"> </input>
                </div>
            </Container>



        )
    }
}
export default Login