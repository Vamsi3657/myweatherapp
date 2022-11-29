

const express = require('express');
const dotenv = require('dotenv');

const WeatherRoutes = require('./src/route/weather.route');
const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// const port = 5000;

app.use(WeatherRoutes);
app.set('view engine', 'ejs');

app.set('views', './src/views');

const port = process.env.PORT || 5000;

app.get('/weatherhome', async(req, res) =>{
    let { data } = await axios.get('http://localhost:8080/microserviceshome');
    console.log("DATA", data);
    res.send(data)
})

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})