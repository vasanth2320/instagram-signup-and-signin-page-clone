const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');

const user = require('./user');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.get('/*', (req, res) => {
    res.send('hai')
});

app.post('/signup', async (req, res) => {
    console.log(req.body);
    const { emailAddress, fullName, username, password: plainTextPassword } = req.body;

    if (!emailAddress || !fullName || !username || !plainTextPassword) {
        return res.status(400).json({
            error: 'Missing required property'
        });
    }

    console.log(emailAddress,
                fullName,
                username,
                plainTextPassword
            )

    const password = await bcrypt.hash(plainTextPassword, 10);
    try {
        const response = await user.create({
            emailAddress,
            fullName,
            username,
            password
        })
        console.log(`User created successfully: ${response}`)
    } catch (error) {
        if (error.code === 11000) {
            // duplicate key
            return res.json({ status: 'error', error: 'Username already exits'})
        }
        throw error;
    }
    res.send(req.body);
});

module.exports = app;