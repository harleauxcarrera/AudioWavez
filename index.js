const express = require('express');
const mongoose = require('mongoose');

//require api route files
const mixes = require('./api/mixes');
const tracks = require('./api/tracks');
const samplepacks = require('./api/samplepacks');


const app = express();

//Db config
const db = require('./config/keys').mongoURI;

//connect to mongoDb on Mlab
mongoose
  .connect(db, {useNewUrlParser: true})//second arg was needed due to deprecation 
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