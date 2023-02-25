import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.scss';
import logo from '../../instagram-logo.png';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      Username: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName='NULL', email, password, Username } = this.state;
    
    this.setState({
      displayName: '',
      email: '',
      password: '',
      Username: ''
    });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };


  render() {
    const { displayName, email, password, Username } = this.state;
    return (
      <div className='sign-up'>
        <img src={logo} alt="Instagram logo" />
        <h2>Sign up to see photos and videos from your friends.</h2>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Name'
          />
          <FormInput
            type='text'
            name='Username'
            value={Username}
            onChange={this.handleChange}
            label='Username'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;