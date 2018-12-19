const express = require('express');
const router = express.Router();


router.get('/test' , (req, res) => {
  res.send("Test samplepacks route works");
});

module.exports = router;
