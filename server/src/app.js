const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const User = require('./user');
const app = express();

JWT_SECRET = 'OJVNIOERIOivijtri ewrioj)(*)$#8074584uf80ue87uoh*)**(&#$*)U';

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
        const response = await User.create({
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

app.post('/signin', async(req, res) => {
    console.log(req.body);

    const { username, password } = req.body;

    const user = await User.findOne({username}).lean()
    console.log(user);

    if(!this.user) {
        return res.json({ status: 'error', error: 'Invaild username/password'})
    }

    if(await bcrypt.compare(password, user.password)) {

        const token = jwt.sign({ 
                    id: user._id, 
                    username: user.username 
                }, JWT_SECRET)

        return res.json({ status: 'ok', data: token})
    }

    res.json({ status: 'error', error: 'Invalid username/password' });
});

module.exports = app;