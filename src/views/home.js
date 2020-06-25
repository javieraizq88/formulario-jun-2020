import React from 'react';
import '../App.css';
import Header from '../components/header';
import { Link } from 'react-router-dom';
// Resposive 
const Home = props => {

    return (
        <div >
            <div className="card-group ">
                <div className=" card-body col-md-1 col-xs-1"></div>
                <div className="card-body col-md-10 col-xs-10"
                    id="container1">
                    <Header />
                    <h2 id="subtitulo-home" >Para inicar la encuesta, haz click en el siguiente botón</h2>
                    <Link
                        id="boton-home"
                        to="/pregunta1">
                        <button
                            type="button"
                            className="btn btn-success">
                            Comenzar
                        </button>
                    </Link >
                </div>
            </div>
        </div>
    )
}

export default Home;