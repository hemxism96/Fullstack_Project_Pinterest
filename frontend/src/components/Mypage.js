import React, { Component } from 'react';
import '../css/Mypage.css';

class Test extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      user: [],
    };
  }
 
  componentDidMount() {
    fetch('/api')
      .then(response => response.json())
      .then(data => this.setState({ user: data }));
  }

  render() {
    const { user } = this.state;
    if (user=='user'){
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
    else {
      return (
        <form action="/api/login" method='POST'>
          <div class="wrap">
              <div class="login">
                  <h2>Log-in</h2>
                  <div class="login_id">
                      <h4>E-mail</h4>
                      <input type="text" name="id" id="id" placeholder="Id" />
                  </div>
                  <div class="login_pw">
                      <h4>Password</h4>
                      <input type="password" name="password" id="password" placeholder="Password" />
                  </div>
                  <div class="login_etc">
                      <div class="subscribe">
                        <a href="/subscribe">You didn't subscribe yet? Subscribe!</a>
                      </div>
                  </div>
                  <div class="submit">
                      <input type="submit" value="Submit" />
                  </div>
              </div>
          </div>
        </form>
      )
  }
}
}
export default Test;