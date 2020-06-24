import React from 'react';
import './App.css';
import { Link, useHistory } from 'react-router-dom';
import Header from './header';

const Formulario1 = props => {

    const history = useHistory();

    return (
<div id="container">
    <Header />

        <div >
                      <h3 id="subtitulo">Pregunta 1 de 4</h3>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <form id="loginForm">
                            <div id="error" className="alert alert-danger" role="alert">
                            </div>
                            <div className="col-md-5">
                                <label id="pregunta1" for="nombre">¿Cuál es tu nombre?</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Nombre y Apellido" value="" />
                                <br />
                            </div>
                        </form>
                                <div className="" id="botones">
<button id="boton-volver" type="button" onClick={() => history.goBack()} className="btn btn-success float-left">Volver</button>
                                <Link to="/pregunta2"><button id="boton-siguiente" type="button" className="btn btn-success">Siguiente</button></Link>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Formulario1;