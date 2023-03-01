import React from 'react';
import { Box, Container, Heading, Input } from './settings.styles.jsx';

import { httpSettings } from '../../hooks/requests';

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            newPassword: '',
            confirmPassword: ''
        };
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        await httpSettings(this.state);

        this.setState({
            newPassword: '',
            confirmPassword: ''
        });
    }

    render() {
        return (
            <Container>
                <Box>
                    <Heading>Change Password</Heading>
                    <form onSubmit={this.handleSubmit}>
                        <Input id="newPassword" type="password" placeholder="New Password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange} autoComplete="off" />
                        {/* <label>New password</label> */}
                        <br />
                        <Input id="confirmPassword" type="password" placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} autoComplete="off" />
                        {/* <label>Confirm password</label> */}
                        <br />
                        <button className="login-button" title="login" type="submit">Change Password</button>
                    </form>
                </Box>
            </Container>
        )
    }
}

export default Settings;