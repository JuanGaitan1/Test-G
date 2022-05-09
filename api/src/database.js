const mongoose = require('mongoose');

const MONGODB_URI = ('mongodb+srv://admin:admin@cluster0.ukho1.mongodb.net/test')

//starting the server
mongoose.connect (
    MONGODB_URI,{})
.then(db=> console.log('DB is connect'))
.catch(err => console.log(err));
