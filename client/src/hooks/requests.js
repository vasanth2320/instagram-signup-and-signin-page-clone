const API_URL = 'http://localhost:8000';

async function httpSignUp(singUpDetails) {
    try {
        return await fetch(`${API_URL}/signup`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(singUpDetails),
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