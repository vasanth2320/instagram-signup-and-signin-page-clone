import React from 'react';

// import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';
// import logo from '../../instagram-logo.png';

class SignIn extends React.Component {
    // constructor() {
    //     super();
    // }

    render() {
        return (
            <div class="container">
                <div class="box">
                    <div class="heading"></div>
                    <form class="login-form">
                        <div class="field">
                            <input id="username" type="name" placeholder="Phone number, username, or email" />
                            <label for="username">Phone number, username, or email</label>
                        </div>
                        <div class="field">
                            <input id="password" type="password" placeholder="password" />
                            <label for="password">Password</label>
                        </div>
                        <button class="login-button" title="login">Log In</button>
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
                            <a class="forgot-password" href="#">Forgot password?</a>
                        </div>
                    </form>
                </div>
                <div class="box">
                    <p>Don't have an account? <a class="signup" href="http://localhost:3000/signup">Sign Up</a></p>
                </div>
        </div>
        )
    }
}

export default SignIn;