const express = require('express');
const cors = require("cors");
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config()
const app = express();

connectDB();

app.use(express.json())
app.use(cors());
app.use(morgan('dev'));




const port = process.env.PORT || 5000



app.listen(port, ()=>{
    console.log(`Server is running or port ${port}`);
});