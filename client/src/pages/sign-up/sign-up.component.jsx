import React from 'react';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = { emailAddress: '',
                       fullName: '',
                       username: '',
                       password: ''
                    };
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
      };

    handleSubmit = (event) => {
        console.log(event)
    }

  render() {
      return (
          <div className="container">
              <div className="box">
                  <div className="heading"></div>
                  <h2>Sign up to see photos and videos from your friends.</h2>
                  <form className="login-form" onSubmit={this.handleSubmit}>
                      <div className="field">
                          <input id="emailAddress" type="email" placeholder="Email address" name='emailAddress'  value={this.state.emailAddress} onChange={this.handleChange}/>
                          <label>Email address</label>
                      </div>
                      <div className="field">
                          <input id="full name" type="text" placeholder="full name" name='fullName' value={this.state.fullName}  onChange={this.handleChange} />
                          <label >Full Name</label>
                      </div>
                      <div className="field">
                          <input id="username" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                          <label >Username</label>
                      </div>
                      <div className="field">
                          <input id="password" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} autoComplete="on" />
                          <label >Password</label>
                      </div>
                      <button className="login-button" title="login" type="submit">Sign Up</button>
                      <div className="separator">
                          <div className="line"></div>
                          <p>OR</p>
                          <div className="line"></div>
                      </div>
                      <div className="other">
                          <button className="fb-login-btn" type="button">
                              <i className="fa fa-facebook-official fb-icon"></i>
                              <span className="">Log in with Facebook</span>
                          </button>
                      </div>
                  </form>
              </div>
      </div>
      )
  }
}

export default SignUp;