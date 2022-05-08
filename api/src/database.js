const mongoose = require('mongoose');
require("dotenv").config();

//starting the server
mongoose.connect (
    process.env.MONGODB_URI,{})
.then(db=> console.log('DB is connect'))
.catch(err => console.log(err));
