import React, { Component } from 'react';
import '../css/Subscribe.css';

const url = '/api/test';

class Subscribe extends Component {
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
        <form action="/api/subscribe" method="POST">
                                                                                               
            <h2>Subscribe</h2>
            <div class="textForm">
                <input name="loginId" type="text" class="id" placeholder="Id" />
            </div>
            <div class="textForm">
                <input name="loginPw" type="password" class="pw" placeholder="Password" />
            </div>
            <div class="textForm">
                <input name="loginPwConfirm" type="password" class="pw" placeholder="Password Check" />
            </div>
            <div class="textForm">
                <input name="name" type="text" class="name" placeholder="Name" />
            </div>
            <div class="textForm">
                <input name="email" type="text" class="email" placeholder="Email Address" />
            </div>
            <input type="submit" class="btn" value="J O I N"/>
        </form>
      )
  }
}
export default Subscribe;