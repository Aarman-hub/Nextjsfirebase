const mongoose = require('mongoose');

const connectDB = async () =>{
    const db = process.env.MONGO_URI;
    try {
        await mongoose.connect(db,{
            useNewUrlParser:true
        });
        console.log('Connect Database');
    } catch (error) {
        process.exit(1);
    }
}
module.exports = connectDB;