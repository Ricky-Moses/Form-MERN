const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config();

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB connected...');
    }
    catch(err){
        console.log('Error Connecting to MongoDB', err);
        process.exit(1)
    }
}

module.exports = connectDb