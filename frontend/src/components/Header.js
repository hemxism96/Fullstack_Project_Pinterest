import React,  { useState } from 'react';


import Link from "./Link";
import '../css/Header.css';
import logo from '../logo.png';
import styled from 'styled-components';


  function Header(props) {

    const [input, setInput] = useState("");

    const onSearchSubmit = (e) => {
      e.preventDefault();
      props.onSubmit(input);
      
    }

    
    return (
        <div className="App-header">
          <li className="tap">
            <Link href="/" className="item">
              <img src={logo} width="150" alt="logo" />
            </Link>
          </li>
          <li className="tap">
            <Link href="/categories" className="item">
              Database images
            </Link>
          </li>
          <li className="tap">
          < li className="search-bar-wrapper">
          <form action="/" method="get">
              <label htmlFor="header-search">
            <span className="visually-hidden">Search anything...</span>
              </label>
                <input 
                type="text" onChange={(e) => setInput(e.target.value)}
                 />
                <button type="submit" onClick={onSearchSubmit}></button>
              </form>
            </li> 
          </li>
        
          <li className="tap">
            <Link href="/all" className="item">
              Add pins
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

export default Header

const SearchWrapper = styled.div`
      flex: 1;`

const SearchBarWrapper = styled.div`
      background-color: #efefef;
      display: flex;
      height: 60px;
      width: 100%;
      border-radius: 50px;
      padding-left: 10px;
      
      form {
        display: flex;
        flex: 1;
      }
      
      form > input {
        background-color: transparent;
        border: none;
        width: 100%;
        margin-left: 5px;
        font-size: 16px;
      }
      
      form > button {
        display: none;
      }

      input:focus {
        outline: none;
      }
    `