import React, { Component } from 'react';
import '../css/Mypage.css';
const url = '/api/mypage';

class Test extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      user: [],
    };
  }
 
  componentDidMount() {
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ user: data }));
  }

  render() {
    const { user } = this.state;
      
    return (
      <div class="wrap">
      <div class="Container">
        <div>
          <div>{user.username}</div>
        </div>    
      </div>
      <div class="summaryContainer">
        <div class="item">
            <div class="number">{user.userid}</div>
            <div>ID</div>
          </div>
          <div class="item">
            <div class="number">{user.useremail}</div>
            <div>Email</div>
          </div>
      </div>
    </div>
      )
  }
}
export default Test;