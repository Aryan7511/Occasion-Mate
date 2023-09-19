const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const url = "URL";

const connectToDatabase = () => {
    mongoose.connect(url).then(() => {
        console.log("Connected Successfully !!!");
    }).catch(err => console.error(err));
}

module.exports = connectToDatabase;