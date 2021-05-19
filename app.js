const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const Stream = require("stream").Transform;
const fs = require("fs");

var frontEnd = require('./frontend');
var display = require('./display');

var app = express();
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let api_url = "https://api.nasa.gov/planetary/apod?api_key=";
let api_key = "Mb6N3pcw8ifB2msXOe7CBgnwGcszpq2og0pfs5py"
let api = api_url+api_key;

app.get('/', (req, res) => {
    res.send(frontEnd());
})

app.post('/showData', (req, res) => {

    var date = req.body.Date;
    var newdate = date.split("-").reverse().join("-");

    https.get(api+"&date="+date, (resp, req) => {
        let data="";
            
        resp.on("data", chunk => {
            data+=chunk;
        });
    
        resp.on("end", () => {
            let pic_date = newdate;
            let expain = JSON.parse(data).explanation;
            let hdurl = JSON.parse(data).hdurl;
            let url = JSON.parse(data).url;
            let title = JSON.parse(data).title;
    
            https.get(hdurl, res => {
                //console.log(res.headers);
                //console.log(res.headers["content-type"], res.headers["content-length"]);
    
                if(
                    res.statusCode == 200 &&
                    res.headers["content-type"] == "image/jpeg"
                ) {
                    let img = new Stream();
    
                    res.on("data", chunk => {
                        img.push(chunk);
                    });
    
                    res.on("end", () => {
                        let fileName = __dirname+"/apod.jpg";
                        // console.log("Directory: "+__dirname);
                        fs.writeFileSync(fileName, img.read());
                    });
                }
            })
                .on("error", err => {
                    console.log("Error: "+err.message);
                });

            

            if(url.includes("youtube")){
                console.log("URL: "+url);
                flag=1;
                res.send(display({ pic_date, expain, url: url, title, flag }));
            }
            else{
                console.log("URL: "+hdurl);
                flag=0;
                res.send(display({ pic_date, expain, url: hdurl, title, flag }));
            }
        });
    })
        .on("error", err => {
            console.log("Error: "+err.message);
        });
});

app.listen(process.env.PORT || 8080, () => {
    console.log("Server Started");
});
