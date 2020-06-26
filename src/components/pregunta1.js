import React, { useContext } from "react";
import '../App.css';
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Header from "./header";

// resposive

const Pregunta1 = props => {
    const history = useHistory();
    const { store, actions } = useContext(Context)

    return (
        <div >
            <div className="card-group ">
                <div className=" card-body col-md-1 col-xs-1"></div>
                <div className="card-body col-md-10 col-xs-10"
                    id="container1">
                    <Header />
                    <div>
                        <h3 id="subtitulo">Pregunta 1 de 4</h3>

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <form id="loginForm">
                                        <div id="error"
                                            className=""
                                            role="alert">
                                        </div>
                                        <div className="card-group">
                                            <label
                                                className="col-md-4 col-xs-4"
                                                id="pregunta1"
                                                for="nombre">
                                                ¿Cuál es tu nombre?
                                            </label>
                                            <input
                                                type="text"
                                                className="col-md-5 form-control"
                                                name="name"
                                                id="name"
                                                placeholder="Escribe tu Nombre y Apellido"
                                                onChange={(e) => { actions.handleChange(e) }}
                                                value={store.name}
                                            />
                                            <br />
                                        </div>
                                    </form>

                                    {/* botones */}
                                    <div
                                        className=""
                                        id="botones">
                                        <button
                                            id="boton-volver"
                                            type="button"
                                            onClick={() => history.goBack()}
                                            className="btn btn-success float-left">
                                            Volver
                                        </button>

                                        {/* renderizado validando el ingreso de datos en nombre */}
                                        {
                                            store.name &&
                                                store.name ?
                                                <Link
                                                    to="/pregunta2">
                                                    <button
                                                        id="boton-siguiente"
                                                        type="button"
                                                        className="btn btn-success">
                                                        Siguiente
                                                    </button>
                                                </Link>
                                                :
                                                <button
                                                    id="boton-siguiente"
                                                    type="button"
                                                    className="btn btn-success disabled">
                                                    Siguiente
                                                </button>

                                        }

                                    </div> {/* fin de botones */}

                                </div>{/* fin col */}
                            </div>{/* fin row */}
                        </div>{/* fin container */}
                    </div>{/* fin contenido pregunta 3 */}
                </div>
            </div>
        </div>

    )
}

export default Pregunta1