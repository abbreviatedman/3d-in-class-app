const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectToMongoDb = async function() {
    mongoose.set('strictQuery', false);
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to the MongoDB Atlas cluster!');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToMongoDb;