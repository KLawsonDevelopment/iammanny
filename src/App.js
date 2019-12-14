import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/main';
import AboutMe from './components/aboutme';
import Live from './components/live';
import Socials from './components/socials'

function App() {
  return (
    <Router>
      <Main></Main>
      <AboutMe></AboutMe>
      <Live></Live>
      <Socials></Socials>
    </Router>
  );
}

export default App;
