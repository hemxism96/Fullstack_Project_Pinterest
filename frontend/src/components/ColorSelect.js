import React, { Component } from 'react';

const url = '/api/test';

class Test extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      hits: [],
    };
  }
 
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
  }

  render() {
    const { hits } = this.state;
      
    return (
        <div className="test">
          <h1>Blockchain Voter</h1>
          <ul>
            {hits.map(hit =>
              <li key={hit._id}>
                {hit.age}
                {hit.name}
              </li>
            )}
          </ul>
          <button onClick={() => this.fetchHelloWorld()}>Python</button>
        </div>
      )
  }
}
export default Test;