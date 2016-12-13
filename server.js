var handlebars = require('handlebars'),
    fs = require('fs');
var http = require('http'),
    url = require('url');

function start() {
    var processRequest = function (req, res) {
        var pathname = url.parse(req.url).pathname;
        // if (fs.exists('.' + pathname)) {
        //
        // }

        if (pathname == '/style.css') {
            fs.readFile('style.css', 'utf-8', function (error, source) {
                res.writeHead(200, {
                    "Content-Type": "text/css"
                });
                res.write(source);
                res.end();
            });
        } else {
            fs.readFile('index.html', 'utf-8', function(error, source) {
                var template = handlebars.compile(source);
                var html = template(data);

                console.log('pathname', pathname);

                console.log(error);

                console.log(html)

                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write(html);
                res.end();
                res.onerror = function () {
                    console.log('dupa,', this);
                }
            });
        }
    };

    var server = http.createServer(processRequest);

    server.listen(8888);
    console.log('serwer ruszyl');
}


var data = {
    "persons": [
        {
            "personName": "Ennio Morricone",
            "hr9": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr10": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr11": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr12": {
                "cssClass": "doors",
                "activityName": "Bramki"
            },
            "hr13": {
                "cssClass": "doors",
                "activityName": "Bramki"
            },
            "hr14": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr15": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr16": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr17": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr18": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr19": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr20": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr21": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr22": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            }
        },
        {
            "personName": "Ennio Morricone",
            "hr9": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr10": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr11": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr12": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr13": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr14": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr15": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr16": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr17": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr18": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr19": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr20": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr21": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            },
            "hr22": {
                "cssClass": "marketplace",
                "activityName": "Targi"
            }
        }
    ]
}

start();