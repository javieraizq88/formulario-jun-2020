import React from "react";
import { Link } from "react-router-dom";

const Preg2 = props => {
    return (
<div id="container">
            <h1 id="titulo" className="" >Encuesta Cadem</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form id="loginForm">
                            <div id="error" className="alert alert-danger" role="alert">
                            </div>
                            <div >
                                <label id="pregunta" for="nombre">¿Cuál es tu nombre?</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Nombre y Apellido" value="" />
                                <br />
                                <Link to="/pregunta2"><button id="boton-siguiente" type="button" className="btn btn-success">Siguiente</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preg2