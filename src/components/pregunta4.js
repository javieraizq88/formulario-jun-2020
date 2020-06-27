import React, { useContext } from "react";
import '../App.css';
import { useHistory, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Header from "./header";

const Pregunta4a = ({ marca }) => {
    const { actions } = useContext(Context)

    return (
        <div className="card-group" id="pregunta3">
            <label
                className="col-md-5 col-xs-5">
                ¿Qué te parece la marca {marca}?
            </label>
            {
                marca === "nike" &&
                    marca === "nike" ?
                    <div className="col-md-5 col-xs-5">
                        <div id="buena1" className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="nike"
                                id="buena"
                                value="buena"
                                onClick={(e) => { actions.handleChange(e) }} />
                            <label
                                className="form-check-label"
                                for="buena">
                                Buena
                            </label>
                        </div>
                        <div
                            id="niBuenaNiMala1" className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="nike"
                                id="niBuenaNiMala"
                                value="Ni buena ni mala"
                                onClick={(e) => { actions.handleChange(e) }} />
                            <label
                                className="form-check-label"
                                for="niBuenaNiMala">
                                Ni buena ni mala
                            </label>
                        </div>
                        <div
                            id="mala1" className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="nike"
                                id="mala"
                                value="mala"
                                onClick={(e) => { actions.handleChange(e) }} />
                            <label
                                className="form-check-label"
                                for="mala">
                                Mala
                                </label>
                        </div>
                    </div>
                    :
                    <div> </div>
            }

            {
                marca === "adidas" &&
                    marca === "adidas" ?
                    <div className="col-md-5 col-xs-5">
                        <div id="buena1" className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="adidas"
                                id="buena"
                                value="buena"
                                onClick={(e) => { actions.handleChange(e) }} />
                            <label
                                className="form-check-label"
                                for="buena">
                                Buena
                            </label>
                        </div>
                        <div id="niBuenaNiMala1" className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="adidas"
                                id="niBuenaNiMala"
                                value="Ni buena ni mala"
                                onClick={(e) => { actions.handleChange(e) }} />
                            <label
                                className="form-check-label"
                                for="niBuenaNiMala">
                                Ni buena ni mala
                            </label>
                        </div>
                        <div id="mala" className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="adidas"
                                id="mala"
                                value="mala"
                                onClick={(e) => { actions.handleChange(e) }} />
                            <label
                                className="form-check-label"
                                for="mala">
                                Mala
                            </label>
                        </div>
                    </div>
                    :
                    <div> </div>
            }


            {
                marca === "puma" &&
                    marca === "puma" ?
                    <div className="col-md-5 col-xs-5">
                        <div id="buena1" className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="puma"
                                id="buena"
                                value="buena"
                                onClick={(e) => { actions.handleChange(e) }} />
                            <label
                                className="form-check-label"
                                for="buena">
                                Buena
                            </label>
                        </div>
                        <div id="niBuenaNiMala1" className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="puma"
                                id="niBuenaNiMala"
                                value="Ni buena ni mala"
                                onClick={(e) => { actions.handleChange(e) }} />
                            <label
                                className="form-check-label"
                                for="niBuenaNiMala">
                                Ni buena ni mala
                            </label>
                        </div>
                        <div id="mala1" className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="puma"
                                id="mala"
                                value="mala"
                                onClick={(e) => { actions.handleChange(e) }} />
                            <label
                                className="form-check-label"
                                for="mala">
                                Mala
                            </label>
                        </div>
                    </div>
                    :
                    <div> </div>
            }
        </div>
    )
}


const Pregunta4 = props => {
    const history = useHistory();
    const { store } = useContext(Context)
    const obj = store.marca;
    const map = Object.keys(obj);

    return (
        <div>
            <div className="card-group ">
                <div className=" card-body col-md-1 col-xs-1"></div>
                <div className="card-body col-md-10 col-xs-10"
                    id="container1">
                    <Header />
                    <div>
                        <h3 id="subtitulo">Pregunta 4 de 4</h3>

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <form id="loginForm">
                                        {
                                            map.map((marca, i) => {
                                                return (
                                                    <Pregunta4a marca={marca} key={i} />
                                                )
                                            })
                                        }
                                    </form> {/* fin del formulario */}

                                    {/* botones */}
                                    <div
                                        className=""
                                        id="botones">
                                        <button
                                            id="boton-volver-preg3"
                                            type="button"
                                            onClick={() => history.goBack()}
                                            className="btn btn-success float-left">
                                            Volver
                                    </button>

                                        {/* validando ya que es por radio y obliga a marcar una opcion*/}
                                                <Link
                                                    to="/finalizar">
                                                    <button
                                                        id="boton-finalizar"
                                                        type="button"
                                                        className="btn btn-success">
                                                        Finalizar
                                                    </button>
                                                </Link>
      

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


export default Pregunta4