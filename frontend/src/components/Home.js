import React, { Component } from 'react';
import styled from "styled-components";
import '../css/Home.css';
import Pin2 from "./Pin2";

const url = '/api/about'

  function Home(props) {
    /* const { hits } = this.state; */
    let { pins } = props;
    
      
    return (
      <div className="wraps">
      <div className="Containers">
          {pins.map((pin, index) => {
            let {urls} = pin;
            return <Pin2 key={index}  urls={urls} />
          })} 
      </div>
    </div>
      )
  }

export default Home;

const Wrapper = styled.div`
    background-color: pink;
    display: flex;
    justify-content: center;
    `

const Container = styled.div`
    height: 600px;
    display: flex;
    width: 80%;
    background-color: green;
    align-items: flex-end;
    padding: 16px;
    `
