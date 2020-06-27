import React, { useContext } from "react";
import '../App.css';
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Header from "./header";


const Pregunta2 = props => {
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
                        <h3 id="subtitulo">Pregunta 2 de 4</h3>

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <form id="loginForm">
                                        <div className="card-group">
                                            <label
                                                className="col-md-4 col-xs-4"
                                                id="pregunta1"
                                                for="nombre">
                                                ¿Qué edad tienes {store.name}?
                                        </label>
                                            <input
                                                type="number"
                                                className="col-md-5 form-control"
                                                name="age"
                                                id="age"
                                                placeholder="Escribe tu edad en años"
                                                onChange={(e) => { actions.handleChange(e) }}
                                                value={store.age}
                                            />
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

                                        {/* renderizado validando el ingreso de datos en nombre */}
                                        {
                                            store.age &&
                                                store.age ?
                                                <Link
                                                    to="/pregunta3">
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

                                    </div> {/* fin  botones */}

                                </div>{/* fin col */}
                            </div>{/* fin row */}
                        </div>{/* fin container */}
                    </div>{/* fin contenido pregunta 2 */}
                </div>
            </div>
        </div>

    )
}


export default Pregunta2