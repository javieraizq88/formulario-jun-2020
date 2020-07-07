import React from 'react';
import '../App.css';
import logo from "./logo.jpg";

const Header = props => {

    return (
        <div id="header">
            <div className="container" id="parte-superior">
                <img id="logo-JIM" alt="" src={logo}></img>
                <h1 id="titulo">Desafío programadora de encuentas</h1>
            </div>
        </div>
    )
}

export default Header;