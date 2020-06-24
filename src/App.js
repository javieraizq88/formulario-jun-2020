import React from 'react';
import './App.css';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Formulario1 from './1';
import Preg2 from './2';

const App = props => {

  return (

    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Formulario1} />
        <Route exact path="/pregunta2" component={Preg2} />
      </Switch>
    </BrowserRouter>




  )
}

export default App;