import React from "react";
import { Link } from "react-router-dom";

const Preg2 = props => {
    return (
        <div id="container">
            <h1 id="titulo" className="" >Encuesta Cadem</h1>
            <h3 id="subtitulo">Pregunta 2 de 4</h3>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <form id="loginForm">
                            <div id="error" className="alert alert-danger" role="alert">
                            </div>
                            <div class="form-group col-md-3">
                                <label id="pregunta" for="nombre">¿Qué edad tienes nombre P1?</label>
                                <input type="text" className="form-control" id="nombre" placeholder="" value="" />
                                <br />
                                <Link to="/pregunta3"><button id="boton-siguiente" type="button" className="btn btn-success">Siguiente</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preg2