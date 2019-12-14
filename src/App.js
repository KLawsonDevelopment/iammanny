import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from './components/main';
import AboutMe from './components/aboutme';
import Live from './components/live';
import Socials from './components/socials'

function App() {
  return (
    // Initial router setup to controll what order the Components go into.
    <Router>

      {/* Initial main page, will show a clip of twitch streamer. */}
      <Main></Main>

      {/* About Me page for the streamer. Short biography to explain their story and what they want to do on twitch. */}
      <AboutMe></AboutMe>

      {/* Live page. Pull a direct link to the twitch page of the streamer, and make it a specific size. */}
      <Live></Live>

      {/* Basic social links page. Will show Twitter, Instagram, and any other social platforms the streamer is on via clickable icons. */}
      <Socials></Socials>
    </Router>
  );
}

export default App;
