import React, { Component } from 'react';
import '../css/Mypage.css';
import '../css/Login.css';
import '../css/Index.css';

class Mypage extends Component {
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
    if (user.session=='user'){
      return (
        <div class="box">
          <div class="tap">
            <div class="wrap">
              <div class="Container">
                <div>
                  <div>{user.username}</div>
                </div>
                <div class="margin_box"></div>
                <div>
                  <div>ID: </div>
                  <div class="number">{user.userid}</div>
                </div>
                <div class="margin_box"></div>
                <div class>
                  <div>Email: </div>
                  <div class="number">{user.useremail}</div>
                </div> 
              </div>
            </div>
            <div class="container">
              <h2>Favorite Image</h2>
              <div class="cards"><img src={user.favorite_photos}></img></div>
            </div>
            <form action="/api/logout" method="POST">
                <input type="submit" class="btn" value="LOG OUT"/>
            </form>
          </div>
        </div>
      )
    }
    else {
      return (
        <form action="/api/login" method='POST'>
          <div class="wrap">
              <div class="login">
              </div>
          </div>
          <div class="wrap">
              <div class="login">
                  <h2>Log-in</h2>
                  <div class="login_id">
                      <h4>ID</h4>
                      <input type="text" name="id" id="id" placeholder="Id" />
                  </div>
                  <div class="login_pw">
                      <h4>Password</h4>
                      <input type="password" name="password" id="password" placeholder="Password" />
                  </div>
                  <div class="login_etc">
                      <div class="subscribe">
                        <a href="/subscribe">You didn't register yet? Join us!</a>
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
export default Mypage;