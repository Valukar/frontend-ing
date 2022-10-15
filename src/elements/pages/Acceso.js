import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function Acceso() {
    return (
        <div class="">
            <h2>Iniciar Sesión</h2>
            <form>
                <label>Identificación</label><br/>
                <input type="text" name="ID" required />
                <label>Contraseña</label>
                <br/>
                <input type="password" name="password" required /><br/>
                <Link to="/forget-password"><label className="left-label">Recuperar Contraseña</label></Link>
                <p>
                    <button id="sub_btn" type="submit">Iniciar Sesión</button>
                </p>
            </form>
        </div>
    )
}
