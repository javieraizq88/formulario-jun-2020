import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./header";

const Preg2 = props => {
    const history = useHistory();

    return (
        <div id="container">
            <Header />

            <h3 id="subtitulo">Pregunta 2 de 4</h3>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <form id="loginForm">
                            <div id="error" className="alert alert-danger" role="alert">
                            </div>
                            <div class="form-group col-md-3">
                                <label id="pregunta2" for="nombre">¿Qué edad tienes nombre P1?</label>
                                <input type="text" className="form-control" id="edad" placeholder="" value="" />
                                <br />
                            </div>
                        </form>
                        <div className="" id="botones">
                            <button id="boton-volver" type="button" onClick={() => history.goBack()} className="btn btn-success float-left">Volver</button>
                            <Link to="/pregunta3"><button id="boton-siguiente" type="button" className="btn btn-success">Siguiente</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preg2