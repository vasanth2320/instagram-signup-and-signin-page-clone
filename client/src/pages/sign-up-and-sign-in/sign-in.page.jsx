import React from 'react';
import { Container, Box, Logo, Field, Input, Label, LoginButton, Separator, Line, Other, LoginForm, FbLoginBtn, FbIcon, ForgotPassword, Signup } from './sign-up-and-sign-in.styles';

import { httpSignIn } from '../../hooks/requests';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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

        await httpSignIn(this.state);

        this.setState({
            username: '',
            password: ''
        });
    }

    render() {
        return (
            <Container>
                <Box>
                    <Logo></Logo>
                    <LoginForm onSubmit={this.handleSubmit}>
                        <Field>
                            <Input id="username" type="name" placeholder="username, or email" name="username" value={this.state.username} onChange={this.handleChange} />
                            <Label>Username, or email</Label>
                        </Field>
                        <Field>
                            <Input id="password" type="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleChange} autoComplete="off" />
                            <Label>Password</Label>
                        </Field>
                        <LoginButton title="login" type="submit">Log In</LoginButton>
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
                            <ForgotPassword href="/#">Forgot password?</ForgotPassword>
                        </Other>
                    </LoginForm>
                </Box>
                <Box>
                    <p>Don't have an account? <Signup href="/signup">Sign Up</Signup></p>
                </Box>
            </Container>
        )
    }
}

export default SignIn;