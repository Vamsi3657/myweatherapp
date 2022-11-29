
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

module.exports.HomePage = async(req, res) => {
    res.render("home");
}

module.exports.WeatherReport = async(req, res) => {
    try {
        let {city} = req.body
        let url = process.env.BASEURL + 'q=' + city +"&appid=" +process.env.APPID
        let {data} = await axios.get(url);
        console.log(data);
        console.log('RESULT', data.main.temp);
        let temperature = Math.ceil(data.main.temp - 273.15);
        res.render("weatherreport", { city, temperature});
    }
    catch (error) {
        console.log('error is', error.message);
    }
}

module.exports.sendHomePage = async(req, res) => {
    res.sendFile(process.cwd() + '/src/view/home.html')
}