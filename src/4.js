import React from "react"
import { Link, useHistory } from "react-router-dom"
import Header from "./header";

const Preg4 = props => {
    const history = useHistory();

    return (
        <div id="container">
            <Header />

            <h3 id="subtitulo">Pregunta 4 de 4</h3>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <form id="loginForm">
                            <div id="error" className="alert alert-danger" role="alert">
                            </div>
                            <div class="form-group col-md-4" id="pregunta3">
                                <label for="Amount">¿Qué te parece la marca marca P3?</label>
                                <div id="buena" class="custom-control custom-radio custom-control-inline">
                                    <input type="radio"  name="apreciacionMarca"
                                        class="custom-control-input" />
                                    <label id="buena1"  class="custom-control-label" for="buena">Buena</label>
                                </div>
                                <div  id="niBuenaNiMala" class="custom-control custom-radio custom-control-inline">
                                    <input type="radio" name="customRadioInline1"
                                        class="custom-control-input" />
                                    <label id="niBuenaNiMala1" class="custom-control-label" for="niBuenaNiMala">Ni buena ni mala</label>
                                </div>
                                <div id="mala" class="custom-control custom-radio custom-control-inline">
                                    <input type="radio"  name="customRadioInline1"
                                        class="custom-control-input" />
                                    <label id="mala1"  class="custom-control-label" for="mala">Mala</label>
                                </div>
                            </div>
                        </form>
                        <div className="" id="botones">
                            <button id="boton-volver4" type="button" onClick={() => history.goBack()} className="btn btn-success float-left">Volver</button>
                            <Link to="/"><button id="boton-finalizar" type="button" className="btn btn-success">Finalizar</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Preg4