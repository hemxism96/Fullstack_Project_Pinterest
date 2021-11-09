import React, { Component } from 'react';
import axios from "axios";

class About extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      }
    }

  componentDidMount(){
    var myRequest = new Request('/api/about');

    fetch(myRequest)
      .then(res => res.json())
      .then(json => {
        this.setState({
        isLoaded: true,
        items: json,
        })
      });
    }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    else{
      return (
        <div className="home">
          <h1>Blockchain Voter</h1>
          <ul>
            {items}
          </ul>
          <button onClick={() => this.fetchHelloWorld()}>Python</button>
        </div>
      );
    }
  }
}
export default About;