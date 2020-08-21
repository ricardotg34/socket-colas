import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NuevoTicket from './pages/NuevoTicket';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Escritorio from './pages/Escritorio';
import Publico from './pages/Publico';

function App() {
  return (
    <div id="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/nuevo-ticket">
          <NuevoTicket />
        </Route>
        <Route path="/escritorio/:escritorio">
          <Escritorio />
        </Route>
        <Route path="/publico">
          <Publico />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
