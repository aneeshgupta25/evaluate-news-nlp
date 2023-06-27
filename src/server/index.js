const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const base_url = "https://api.meaningcloud.com/sentiment-2.1"
const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

app.get('/test', function (req, res) {
    getData({
        text: req.query.t,
        language: req.query.l
    })
    .then(
        function(data) {                        
            res.send(data);
        }
    )    
})

const getData = async (data) => {    
    const response = await fetch(`${base_url}?key=${process.env.API_KEY}&txt=${data.text}&lang=${data.language}`);
    try {
        const newData = await response.json();        
        return newData;
    }
    catch(e) {
        console.log("Error Occurred while Fetching NLP data...");
        alert('Something went wrong!')
    }
}