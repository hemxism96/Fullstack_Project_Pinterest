import React from "react";

import Link from "./Link";
import '../App.css';
import logo from '../logo.png';

const Header = () => {
  return (
    <div className="App">
      <li className="tap_c"><
        img src={logo} width="150" alt="logo" />
      </li>
      <li className="tap_c">
        <Link href="/" className="item">
          Accordion
        </Link> 
      </li>
      <li className="tap_c">
        <Link href="/home" className="item">
          Home
        </Link> 
      </li>
      <li className="tap_c">
        <Link href="/color-select" className="item">
          Color Select
        </Link>
      </li>
      <li className="tap_c">
        <Link href="/translate" className="item">
          Translate
        </Link>
      </li>
      <li className="tap_c">
        <Link href="/search" className="item">
          Wiki Search
        </Link>
      </li>
      <li className="tap_c">
        <Link href="/all" className="item">
          All Widgets
        </Link>
      </li>
    </div>
  );
};

export default Header;
