import React from 'react';
import { Container, Box, Logo, Field, Input, Label, LoginButton, Separator, Line, Other, FbLoginBtn, FbIcon, Heading, LoginForm } from './sign-up-and-sign-in.styles';

import { httpSignUp } from '../../hooks/requests';

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

    handleSubmit = async (event) => {
        event.preventDefault();

        await httpSignUp(this.state);
        
        this.setState({ emailAddress: '',
                       fullName: '',
                       username: '',
                       password: ''
                    });
        }

  render() {
      return (
          <Container>
              <Box>
                <Logo></Logo>
                  <Heading>Sign up to see photos and videos from your friends.</Heading>
                  <LoginForm onSubmit={this.handleSubmit}>
                      <Field>
                          <Input id="emailAddress" type="email" placeholder="Email address" name='emailAddress'  value={this.state.emailAddress} onChange={this.handleChange}/>
                          <Label>Email address</Label>
                      </Field>
                      <Field>
                          <Input id="full name" type="text" placeholder="full name" name='fullName' value={this.state.fullName}  onChange={this.handleChange} />
                          <Label >Full Name</Label>
                      </Field>
                      <Field>
                          <Input id="username" type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleChange}/>
                          <Label >Username</Label>
                      </Field>
                      <Field>
                          <Input id="password" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} autoComplete="off" />
                          <Label >Password</Label>
                      </Field>
                      <LoginButton title="signUp" type="submit">Sign Up</LoginButton>
                      <Separator>
                          <Line></Line>
                          <p>OR</p>
                          <Line></Line>
                      </Separator>
                      <Other>
                          <FbLoginBtn type="button">
                              <FbIcon></FbIcon>
                              <span className="">Log in with Facebook</span>
                          </FbLoginBtn>
                      </Other>
                  </LoginForm>
              </Box>
        </Container>
      )
  }
}

export default SignUp;