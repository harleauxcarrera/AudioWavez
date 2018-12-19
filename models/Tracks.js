const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create model/schema
const TrackSchema = new Schema({
  
  title:{
    type: String, 
    required: true
  },
  length:{
    type: String, 
    required: true
  }, 
  available:{
    type: Boolean, 
    required: true
  },
  image:{
    type: String, 
    required: true
  }, 
  date: {
    type: Date, 
    default: Date.now
  }, 
  source: {
    type: String, 
    required: true
  }
})

module.exports = Track =  mongoose.model('tracks', TrackSchema); //first arg is what we all the export