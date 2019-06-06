import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Form1 from './components/Form1';
import Form2 from './components/Form2';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route path="/insert" component={Form2}/>
      <Route exact path="/" component={Form1}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
