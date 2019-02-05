const express = require("express");
const router = express.Router();
const mongoose = require ('mongoose');
const passport = require ('passport');


//Load Validation
const validateTrackUploadInput = require("../validation/trackUp");
//Load Track Model
const Track = require("../models/Tracks");

//TEST ROUTE
router.get("/test", (req, res) => {
  res.json({ message: "tracks test route works!" });
});

//CREATE TRACK ROUTE
router.post("/", (req, res) => {
  "file"; //comes from the form
  const { errors, isValid } = validateTrackUploadInput(req.body);

  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Track.findOne({ title: req.body.title }).then(track => {
    if (track) {
      //track already in DB
      errors.title = "title arleady exists";
      return res.status(400).json({ errors });
    } else {
      const newTrack = new Track({
        title: req.body.title,
        length: req.body.length,
        available: req.body.available,
        image: req.body.image,
        date: req.body.date,
        source: req.body.source
      });
      //save newTrack to db
      newTrack
        .save()
        .then(track => res.json(track))
        .catch(err => console.log(err));
    }
  });
});


//GET ALL TRACKS
router.get('/all', (req, res) => {
  const errors = {};

  Track.find()
  .populate('track5', ['title', 'length'])
  .then(tracks => {
    if(!tracks){
      errors.notrack = 'There are no tracks available';
      return res.status(404).json(errors); 
    }

    res.json(tracks);
  })
  .catch(err => 
    res.status(404).json({track: 'there are no tracks'})
  );
})
module.exports = router;
