import React, { Component } from 'react';
import PostDataService from "../services/post";

const url = '/api/about'

class Home extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
    };
  }
 
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits}));
  }

  render() {
    const { hits } = this.state;
      
    return (
        <div className="home">
          <h1>Blockchain Voter</h1>
          <ul>
            {hits.map(hit =>
              <li key={hit.one}>
                <a>{hit.two}</a>
              </li>
            )}
          </ul>
          <button onClick={() => this.fetchHelloWorld()}>Python</button>
        </div>
      )
  }
}
export default Home;