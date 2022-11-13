const express = require("express");
const router = express.Router();
const AnimeControllers = require('../controllers/AnimeControllers')

router.get('/list', AnimeControllers.getList)

module.exports = router