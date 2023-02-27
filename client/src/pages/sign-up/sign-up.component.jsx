import React from 'react';
import './sign-up.styles.scss';

class SignUp extends React.Component {
  render() {
      return (
          <div class="container">
              <div class="box">
                  <div class="heading"></div>
                  <h2>Sign up to see photos and videos from your friends.</h2>
                  <form class="login-form">
                      <div class="field">
                          <input id="username" type="name" placeholder="Phone number or email address" />
                          <label for="username">Phone number or email address</label>
                      </div>
                      <div class="field">
                          <input id="full name" type="name" placeholder="full name" />
                          <label for="full name">Full Name</label>
                      </div>
                      <div class="field">
                          <input id="username" type="name" placeholder="username" />
                          <label for="username">Username</label>
                      </div>
                      <div class="field">
                          <input id="password" type="password" placeholder="password" />
                          <label for="password">Password</label>
                      </div>
                      <button class="login-button" title="login">Sign Up</button>
                      <div class="separator">
                          <div class="line"></div>
                          <p>OR</p>
                          <div class="line"></div>
                      </div>
                      <div class="other">
                          <button class="fb-login-btn" type="button">
                              <i class="fa fa-facebook-official fb-icon"></i>
                              <span class="">Log in with Facebook</span>
                          </button>
                      </div>
                  </form>
              </div>
      </div>
      )
  }
}

export default SignUp;