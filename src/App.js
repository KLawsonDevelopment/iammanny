import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/main';


function App() {
  return (

    // Initial router setup to controll what order the Components go into.
    <Router>
      <Main></Main>
    </Router>
  );
}

export default App;
