import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Database from './Components/Database';
import Form from './Components/Form';
import Workerdetail from './Components/Workerdetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/database" component={ Database } />
          <Route path="/form" component={ Form } />
          <Route path="/worker/:id" component={ Workerdetail } />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
