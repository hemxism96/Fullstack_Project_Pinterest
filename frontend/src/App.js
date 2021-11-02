import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './App.css';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <h2>Welcome to Find Your Interest</h2>

            <ul className="tap">
              <li className="tap_c"><img src={logo} width="150" alt="logo" /></li>
              <li className="tap_c"><a href="#news"><Link to={'/home'} className="nav-link"> Home </Link></a></li>
              <li className="tap_c"><a href="#contact"><Link to={'/contact'} className="nav-link">Contact</Link></a></li>
              <li className="tap_c"><a href="#about"><Link to={'/about'} className="nav-link">About</Link></a></li>
              <li className="tap_c"><a href="#about"><Link to={'/about'} className="nav-link">Login</Link></a></li>
            </ul>

            <Switch>
                <Route exact path='/home' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
            </Switch>
          </div>
      </Router>
    );
  }
}

export default App;