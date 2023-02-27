const API_URL = 'http://localhost:8000';

// Sends sign up details of user to server
async function httpSignUp(signUpDetails) {
    try {
        return await fetch(`${API_URL}/signup`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signUpDetails)
        });
    } catch (err){
        return {
            ok: false
        };
    };
}

export {
    httpSignUp
};