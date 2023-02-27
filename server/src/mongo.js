const mongoose = require('mongoose');

const PASSWORD = 'tTJMDBdjOVHEB6m2';
const MONGO_URL = `mongodb+srv://Instagram-0987:${PASSWORD}@instagram-clone-mern.efkrv5m.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready..!');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

async function mongoDisconnect() {
    await mongoose.disconnect();
};

module.exports = {
    mongoConnect,
    mongoDisconnect
}