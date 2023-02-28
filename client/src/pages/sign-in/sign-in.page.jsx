import React from 'react';
import './sign-in.styles.scss';

import { httpSignIn } from '../../hooks/requests';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = { username: '',
                       password: ''
                    };
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
      };

    handleSubmit = async (event) => {
        // event.preventDefault();
        
        await httpSignIn(this.state);

        this.state = { username: '',
                       password: ''
                    };
        }

    render() {
        return (
            <div className="container">
                <div className="box">
                    <div className="heading"></div>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <div className="field">
                            <input id="username" type="name" placeholder="username, or email" name="username" value={this.state.username} onChange={this.handleChange}/>
                            <label>Username, or email</label>
                        </div>
                        <div className="field">
                            <input id="password" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} autoComplete="on"/>
                            <label>Password</label>
                        </div>
                        <button className="login-button" title="login" type="submit">Log In</button>
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
                            <a className="forgot-password" href="#">Forgot password?</a>
                        </div>
                    </form>
                </div>
                <div className="box">
                    <p>Don't have an account? <a className="signup" href="/signup">Sign Up</a></p>
                </div>
        </div>
        )
    }
}

export default SignIn;