import React from "react";

import Link from "./Link";
import '../css/Header.css';
import logo from '../logo.png';

const Header = () => {
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
      </div>
  );
};

export default Header;
