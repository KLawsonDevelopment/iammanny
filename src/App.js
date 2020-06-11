import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import MainPage from './components/MainPage';


function App() {
  return (

    // Initial router setup to controll what order the Components go into.
    <Router>
      <NavBar></NavBar>
      <MainPage></MainPage>
    </Router>
  );
}

export default App;
