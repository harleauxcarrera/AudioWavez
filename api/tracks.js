const express = require('express');
const router = express.Router();


router.get('/test' , (req, res) => {
  res.send("Test tracks route route works");
});

module.exports = router;
