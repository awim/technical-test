const express = require("express");
const request = require("request");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
 
// Create a Server
const server = app.listen(8082, function () {
 
  const host = server.address().address
  const port = server.address().port
 
  console.log("server running on http://%s:%s", host, port)
 
});

app.get('/api/translate', function(req, res){
    console.log(req.body);
    
    var option = {
        "auth": {
            "user": "apikey",
            "password": "sijWQhEjpu-V6yeYFHMx4r7WvmYfXEAqgk3VAWUOdAn1"
        },
        "headers": {
            "content-type": "application/json"
        },
        "url": "https://gateway.watsonplatform.net/language-translator/api/v3/translate?version=2018-05-01",
        "body": JSON.stringify({
                "text" : req.body.text,
                "model_id" : req.body.lang.source + "-" + req.body.lang.target
        })
    };

    request.post(option, (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.log(response);
        res.send(body);
    });
});