import React, { Component } from 'react';

import '../css/Index.css';
const url = '/api/image';

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
      .then(data => this.setState({ hits: data }));
  }

  render() {
    const { hits } = this.state;
    return (
          <div class="container">
            <div class="cards card1">
              <p>Bugs</p>
              <div class="bottom-bar"><a>IMAGE LINK</a></div>
            </div>
            <div class="cards card2">
              <p>Richard</p>
              <div class="bottom-bar"><a>IMAGE LINK</a></div>
            </div>
            <div class="cards card3">
              <p>Gwen</p>
              <div class="bottom-bar"><a>IMAGE LINK</a></div>
            </div>
            <div class="cards card1">
              <p>Bugs</p>
              <div class="bottom-bar"><a>IMAGE LINK</a></div>
            </div>
            <div class="cards card2">
              <p>Richard</p>
              <div class="bottom-bar"><a>IMAGE LINK</a></div>
            </div>
            <div class="cards card3">
              <p>Gwen</p>
              <div class="bottom-bar"><a>IMAGE LINK</a></div>
            </div>
            {hits.map(hit =>
              <div class="cards"><img src={hit.value}></img></div>
            )}
          </div>
      )
  }
}
export default Home;