import React, { useContext } from "react";
import '../App.css';
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Header from "./header";


const Pregunta3 = props => {
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
                        <h3 id="subtitulo">Pregunta 3 de 4</h3>

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <form id="loginForm">
                                        <div className="card-group" id="pregunta3">
                                            <label
                                                className="col-md-4 col-xs-4"
                                                for="marca">
                                                ¿Cuál de las siguientes marcas conoces?
                                        </label>

                                            {/* opcion 1 = Nike */}
                                            <div
                                                class="custom-control custom-switch"
                                                id="opciones-resp">
                                                <input
                                                    type="checkbox"
                                                    class="custom-control-input"
                                                    name="nike"
                                                    id="nike"
                                                    onClick={(e) => { actions.cambiarCheckbox(e) }}
                                                    value="nike"
                                                />
                                                <label
                                                    class="custom-control-label"
                                                    for="nike">
                                                    Nike
                                                </label>
                                            </div>

                                            {/* Opción 2 = Adidas */}
                                            <div
                                                class="custom-control custom-switch"
                                                id="opciones-resp">
                                                <input
                                                    type="checkbox"
                                                    class="custom-control-input"
                                                    name="adidas"
                                                    id="adidas"
                                                    onClick={(e) => { actions.cambiarCheckbox(e) }}
                                                    value="adidas"
                                                />
                                                <label
                                                    class="custom-control-label"
                                                    for="adidas">
                                                    Adidas
                                                </label>
                                            </div>

                                            {/* Opción 3 = Puma */}
                                            <div
                                                class="custom-control custom-switch"
                                                id="opciones-resp">
                                                <input
                                                    type="checkbox"
                                                    class="custom-control-input"
                                                    name="puma"
                                                    id="puma"
                                                    onClick={(e) => { actions.cambiarCheckbox(e) }}
                                                    value="puma"
                                                />
                                                <label
                                                    class="custom-control-label"
                                                    for="puma">
                                                    Puma
                                                </label>
                                            </div>


                                            <br />
                                        </div>
                                    </form> {/* fin del formulario */}

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

                                        {/* renderizado validando marcar por lo menos 1 opcion*/}
                                        {
                                            store.puma || store.nike || store.adidas &&
                                            store.puma || store.nike || store.adidas ?
                                                <Link
                                                    to="/pregunta4">
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


export default Pregunta3