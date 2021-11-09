import React, { Component } from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class About extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
    };
  }
 
  componentDidMount() {
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }));
  }

  render() {
    const { hits } = this.state;
      
    return (
        <div className="home">
          <h1>Blockchain Voter</h1>
          <ul>
            {hits.map(hit =>
              <li key={hit.objectID}>
                <a href={hit.url}>{hit.title}</a>
              </li>
            )}
          </ul>
          <button onClick={() => this.fetchHelloWorld()}>Python</button>
        </div>
      )
  }
}
export default About;