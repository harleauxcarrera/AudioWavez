const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//Load Track Model
const Track = require('../models/Tracks');
//TEST ROUTE
router.get('/test' , (req, res) => {
  res.json({message: 'tracks test route works!'})
});


//CREATE TRACK ROUTE
router.post('/', (req, res) => {
  Track.findOne({title: req.body.title})
    .then(track => {
      if(track){ //track already in DB
        return res.status(400).json({title: "This track title already exists"});
      }else {
        const newTrack = new Track({
          title: req.body.title, 
          length: req.body.length, 
          available: req.body.available,
          image: req.body.image,
          date: req.body.date, 
          source: req.body.source
        });
        //save newTrack to db
        newTrack.save()
          .then(track => res.json(track))
          .catch(err => console.log(err));
        }
    })
})
module.exports = router;
