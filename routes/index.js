const express = require("express");
const router = express.Router();
const animeRouter = require('./anime');

router.use('/anime', animeRouter)

module.exports = router