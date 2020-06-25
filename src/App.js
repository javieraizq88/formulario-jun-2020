import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import Pregunta1 from './components/pregunta1';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pregunta1" component={Pregunta1} />
      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
