const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//require api route files
const mixes = require('./api/mixes');
const tracks = require('./api/tracks');
const samplepacks = require('./api/samplepacks');


const app = express();

//Db config
const db = require('./config/keys').mongoURI;

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//connect to mongoDb on Mlab
mongoose
  .connect('mongodb://harleauxcarrera:please313@ds153785.mlab.com:53785/audiowavez', {useNewUrlParser: true})//second arg was needed due to deprecation 
  .then(() => console.log('mongodb connected'))
  .catch(err => console.log(err));



//initial test route
app.get('/', (req, res) => res.send('Hello tsdfdhere'));


// //use API routes 
app.use('/api/mixes', mixes);
app.use('/api/tracks', tracks);
app.use('/api/samplepacks', samplepacks);


const port = process.env.PORT || 5000;
//listen on port ^
app.listen(port, () => console.log(`Server is running on port ${port}`));