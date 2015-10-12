var express = require('express')
    , bodyParser = require('body-parser')
    , config = require('./config/config.json')
    , pckJson = require('./package.json')
    , http = require('http')
    , app = express()
    , router = express.Router()
    , md5 = require('md5');




router.get('/package.json', function (req, res, next) {
    try {
        res.json(pckJson);
    }
    catch (e) {
        console.error("An Exception when getting the GET Request");
    }
});

router.get('/ip', function (req, res, next) {
    try {
        res.json({ip:req.connection.remoteAddress});
    }
    catch (e) {
        console.error("An Exception when getting the GET Request");
    }
});

router.get('/headers', function (req, res, next) {
    try {
        res.json(req.headers);
        //res.send(response).end();
    }
    catch (e) {
        console.error("An Exception when getting the GET Request");
    }
});

router.get('/date', function (req, res, next) {
    try {
        res.json({
            "date": new Date().toDateString(),
            "time": new Date().toLocaleTimeString(),
            "milliseconds_since_epoch": Date.now()
        });
    }
    catch (e) {
        console.error("An Exception when getting the GET Request");
    }
});

router.get('/md5/:text', function (req, res, next) {
    try {
        res.json({
            "md5": md5(req.params.text),
            "original": req.params.text
        });
    }
    catch (e) {
        console.error("An Exception when getting the GET Request");
    }
});


router.get('/validate/:json', function (req, res, next) {
    try {
        var string_json = req.params.json;
        try {
            var obj = JSON.parse(string_json);
            res.json({
                "validate": true,
                "original": string_json,
                "size": Object.keys(obj).length
            });
        }
        catch (e) {
            res.json({
                "validate": false,
                "original": string_json,
                "error_info": "not a valid JSON"
            });
        }

    }
    catch (e) {
        console.error("An Exception when getting the GET Request");
    }
});


router.get('/echo', function (req, res, next) {
    try {
        res.json(req.query);
    }
    catch (e) {
        console.error("An Exception when getting the GET Request");
    }
});


app.use('/', router);

console.log(config.server.port);

http.createServer(app).listen(process.env.PORT || config.server.port);
console.log("Listening on port: " + (process.env.PORT || config.server.port));
