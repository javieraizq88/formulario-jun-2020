import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import Home from './views/home';
import Pregunta1 from './components/pregunta1';
import Pregunta2 from './components/pregunta2';
import Pregunta3 from './components/pregunta3';
import Pregunta4 from './components/pregunta4';

const App = props => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pregunta1" component={Pregunta1} />
        <Route exact path="/pregunta2" component={Pregunta2} />
        <Route exact path="/pregunta3" component={Pregunta3} />
        <Route exact path="/pregunta4" component={Pregunta4} />
      </Switch>
    </BrowserRouter>
  )
}

export default injectContext(App);
