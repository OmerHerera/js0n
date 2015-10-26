var express = require('express')
    , bodyParser = require('body-parser')
    , config = require('./config/config.json')
    , pckJson = require('./package.json')
    , http = require('http')
    , app = express()
    , router = express.Router()
    , md5 = require('md5');



function _getResponse (url, req) {

    var response = {
        "package.json": {
            "_get": function () {
                return pckJson;
            }
        },
        "ip": {
            "_get": function (req) {
                return {
                    ip: req.connection.remoteAddress
                };
            }
        },
        "headers": {
            "_get": function (req) {
                return req.headers;
            }
        },
        "date": {
            "_get": function () {
                return {
                    "date": new Date().toDateString(),
                    "time": new Date().toLocaleTimeString(),
                    "milliseconds_since_epoch": Date.now()
                };
            }
        },
        "md5": {
            "_get": function (req) {
                return {
                    "md5": md5(req.params.userInput),
                    "original": req.params.userInput
                };
            }
        },
        "validate": {
            "_get": function () {
                var string_json = req.params.userInput;
                var result;
                try {

                    var obj = JSON.parse(string_json);
                    result = {
                        "validate": true,
                        "original": string_json,
                        "size": Object.keys(obj).length
                    };

                }
                catch (e) {
                    result = {
                        "validate": false,
                        "original": string_json,
                        "error_info": "not a valid JSON"
                    };
                }
                return result;
            }
        },
        "echo": {
            "_get": function () {
                return req.query;
            }
        }
    };
    return response[url]._get(req);
}
router.all("*/:userInput", function (req, res, next) {
    try {

        var url =  req.url.substr(1, req.url.length);


        if (url.indexOf("/") > -1) {
            url = url.substring(0, url.indexOf("/"));
        }

        if (url.indexOf("?") > 0) {
            url = req.url.substr(1, req.url.indexOf("?") - 1);
        }

        res.json(_getResponse(url, req));
    }

    catch (e) {
        console.error("An Exception when getting the GET Request");
    }

});




app.use('/', router);

console.log(config.server.port);

http.createServer(app).listen(process.env.PORT || config.server.port);
console.log("Listening on port: " + (process.env.PORT || config.server.port));
