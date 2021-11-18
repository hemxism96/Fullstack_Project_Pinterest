import React, { Component } from 'react';

import Link from "./Link";
import '../css/Header.css';
import logo from '../logo.png';

const url = '/api';

class Header extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      user: [],
    };
  }
 
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ user: data }));
  }

  render() {
    const { user } = this.state;
    if (user=='user'){
      return (
        <div className="App-header">
          <li className="tap">
            <Link href="/" className="item">
              <img src={logo} width="150" alt="logo" />
            </Link>
          </li>
          <li className="tap">
            <Link href="/home" className="item">
              Home
            </Link> 
          </li>
          <li className="tap">
            <Link href="/color-select" className="item">
              Color Select
            </Link>
          </li>
          <li className="tap">
            <Link href="/translate" className="item">
              Translate
            </Link>
          </li>
          <li className="tap">
            <Link href="/search" className="item">
              Wiki Search
            </Link>
          </li>
          <li className="tap">
            <Link href="/all" className="item">
              All Widgets
            </Link>
          </li>
          <li className="tap">
            <Link href="/mypage" className="item">
              My Page
            </Link>
          </li>
        </div>
      );
    }
    else{
      return (
        <div className="App-header">
          <li className="tap">
            <Link href="/" className="item">
              <img src={logo} width="150" alt="logo" />
            </Link>
          </li>
          <li className="tap">
            <Link href="/home" className="item">
              Home
            </Link> 
          </li>
          <li className="tap">
            <Link href="/color-select" className="item">
              Color Select
            </Link>
          </li>
          <li className="tap">
            <Link href="/translate" className="item">
              Translate
            </Link>
          </li>
          <li className="tap">
            <Link href="/search" className="item">
              Wiki Search
            </Link>
          </li>
          <li className="tap">
            <Link href="/all" className="item">
              All Widgets
            </Link>
          </li>
          <li className="tap">
            <Link href="/login" className="item">
              Log in
            </Link>
          </li>
        </div>
      );
    }
    
  }
}
export default Header;