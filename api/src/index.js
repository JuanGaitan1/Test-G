const express = require('express');
const morgan = require ('morgan')
const path = require ('path')
const cors = require('cors');

//Initiliazations

const app = express()
const {mongoose} = require('./database.js')


//setings
app.set('port',process.env.PORT || 3001)

//middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

//global variables

//Routes
app.use ('/api' , require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));
});