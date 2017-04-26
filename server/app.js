var http = require("http");
var server = http.createServer();
var url = require("url");
var querystring = require("querystring");
server.on('request', function(req, res) {
    var urlOption = url.parse(req.url);
    var pathName = urlOption.pathname;
    switch (pathName) {
        case '/news':
            var request = http.request('http://news-at.zhihu.com/api/4/news/latest');
            request.on('response', function(response) {
                var c = "";
                response.headers["Access-Control-Allow-Origin"] = "*";
                response.setEncoding('utf8');
                response.on('data', function(chunk) {
                    c += chunk;
                });
                response.on('end', function() {
                    res.writeHead(200, response.headers);
                    res.write(c);
                    res.end();
                })
            });
            request.on('error', function(err) {
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.end({ "error": err });
            });
            request.end();
            break;
        case '/news/detail':
            var query = querystring.parse(urlOption.query);
            console.log(urlOption);
            var id = query.id;
            var request = http.request('http://news-at.zhihu.com/api/4/news/' + id);
            request.on('response', function(response) {
                var c = "";
                response.headers["Access-Control-Allow-Origin"] = "*";
                response.setEncoding('utf8');
                response.on('data', function(chunk) {
                    c += chunk;
                });
                response.on('end', function() {
                    res.writeHead(200, response.headers);
                    res.write(c);
                    res.end();
                })
            });
            request.on('error', function(err) {
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.end({ "error": err });
            });
            request.end();
            break;
        case '/themes':
            var request = http.request('http://news-at.zhihu.com/api/4/themes');
            request.on('response', function(response) {
                var c = "";
                response.headers["Access-Control-Allow-Origin"] = "*";
                response.setEncoding('utf8');
                response.on('data', function(chunk) {
                    c += chunk;
                });
                response.on('end', function() {
                    res.writeHead(200, response.headers);
                    res.write(c);
                    res.end();
                })
            });
            request.on('error', function(err) {
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.end({ "error": err });
            });
            request.end();
            break;
        case '/sections':
            var request = http.request('http://news-at.zhihu.com/api/4/sections');
            request.on('response', function(response) {
                var c = "";
                response.headers["Access-Control-Allow-Origin"] = "*";
                response.setEncoding('utf8');
                response.on('data', function(chunk) {
                    c += chunk;
                });
                response.on('end', function() {
                    res.writeHead(200, response.headers);
                    res.write(c);
                    res.end();
                })
            });
            request.on('error', function(err) {
                res.writeHead(200, {
                    "Content-Type": "application/json"
                });
                res.end({ "error": err });
            });
            request.end();
            break;
        default:
            res.writeHead(404);
            res.end();
            break;
    }
});
server.listen(8088, function() {
    console.log("listen on 8088");
});
