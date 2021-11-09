import React, { Component } from 'react';
import PostDataService from "../services/post";

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      pyResp: []
    }
  }

  fetchHelloWorld() {
    console.log("fetching python localhost");
    fetch('https://data.cityofnewyork.us/api/views/25th-nujf/rows.json')
      .then(r => r.json())
      .then(r => {
        console.log(r)
        this.setState({
          pyResp: r
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="home">
        <h1>Blockchain Voter</h1>
        <p>
          {this.state.pyResp}
        </p>
        <button onClick={() => this.fetchHelloWorld()}>Python</button>
      </div>
    );
  }
}
export default Home;