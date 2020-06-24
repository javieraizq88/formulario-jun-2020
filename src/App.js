import React from 'react';
import './App.css';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Formulario1 from './1';
import Preg2 from './2';
import Preg3 from './3';
import Home from './home';

const App = props => {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pregunta1" component={Formulario1} />
        <Route exact path="/pregunta2" component={Preg2} />
        <Route exact path="/pregunta3" component={Preg3} />
      </Switch>
    </BrowserRouter>




  )
}

export default App;