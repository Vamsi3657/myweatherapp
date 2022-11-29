

const express = require('express');
const WeatherController = require('../controller/weather.controller');


const router = express.Router();
router.get('/', WeatherController.HomePage)
router.post('/weathercheck', WeatherController.WeatherReport)

router.post('/weather', WeatherController.sendHomePage)
module.exports = router;