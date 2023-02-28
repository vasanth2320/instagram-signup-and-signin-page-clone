import React from 'react';
import './settings.styles.scss';

import { httpSettings } from '../../hooks/requests';

class Settings extends React.Component {
    constructor(props) {
        super(props);

        this.state = { newPassword: '',
                       confirmPassword: ''
                    };
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
      };

    handleSubmit = async (event) => {
        // event.preventDefault();
        
        await httpSettings(this.state);

        this.state = { newPassword: '',
                       confirmPassword: ''
                    };
        }

    render(){
        return(
            <div>
                <h2>Change Password</h2>
                <form onSubmit={this.handleSubmit}>
                    <input id="newPassword" type="password" placeholder="New Password" name="newPassword" value={this.state.newPassword} onChange={this.handleChange} autoComplete="off"/>
                    {/* <label>New password</label> */}
                        <br/>
                    <input id="confirmPassword" type="password" placeholder="Confirm Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange} autoComplete="off"/>
                    {/* <label>Confirm password</label> */}
                        <br/>
                    <button className="login-button" title="login" type="submit">Change Password</button>
                </form>
            </div>
        )
    }
}

export default Settings;