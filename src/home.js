import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './header';

const Home = props => {

    return (
        <div id="container">
            <Header />
            <h2 id="subtitulo-inicio">Para inicar la encuesta, haz click en el siguiente botón</h2>
            <Link to="/pregunta1"><button id="boton-inicio" type="button" className="btn btn-success">Comenzar</button></Link>

        </div>
    )
}

export default Home;