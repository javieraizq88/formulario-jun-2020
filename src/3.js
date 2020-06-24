import React from "react"
import { Link, useHistory } from "react-router-dom"
import Header from "./header";

const Preg3 = props => {
    const history = useHistory();

    return (
        <div id="container">
            <Header />

            <h3 id="subtitulo">Pregunta 3 de 4</h3>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <form id="loginForm">
                            <div id="error" className="alert alert-danger" role="alert">
                            </div>
                            <div class="form-group col-md-4" id="pregunta3">
                                <label for="marca">¿Cuál de las siguientes marcas conoces?</label>
                                <div class="custom-control custom-switch" id="opciones-resp">
                                    <input type="checkbox" class="custom-control-input" id="nike" />
                                    <label class="custom-control-label" for="nike">Nike</label>
                                </div>
                                <div class="custom-control custom-switch" id="opciones-resp2">
                                    <input type="checkbox" class="custom-control-input" id="adidas" />
                                    <label class="custom-control-label" for="adidas">Adidas</label>
                                </div>
                                <div class="custom-control custom-switch" id="opciones-resp2">
                                    <input type="checkbox" class="custom-control-input" id="puma" />
                                    <label class="custom-control-label" for="puma">Puma</label>
                                </div>
                                <br />
                            </div>
                        </form>
                        <div className="" id="botones">
                            <button id="boton-volver3" type="button" onClick={() => history.goBack()} className="btn btn-success float-left">Volver</button>
                            <Link to="/pregunta4"><button id="boton-siguiente3" type="button" className="btn btn-success">Siguiente</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Preg3