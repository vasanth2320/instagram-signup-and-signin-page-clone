const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.get('/*', (req, res) => {
    res.send('hai')
});

app.post('/signup', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

module.exports = app;