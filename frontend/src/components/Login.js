import React, { Component } from 'react';
import '../css/Login.css';

const url = '/api/login';

class Login extends Component {
  
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
export default Login;
