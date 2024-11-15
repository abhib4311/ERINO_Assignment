const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const db = process.env.MONGO_URI || '';
const dbConn = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConn;