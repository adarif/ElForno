console.log("Starting El Forno Server");

var httpServer = require("http");

httpServer.createServer(function(request, response)
{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');

}).listen(3000);

var toBeTested = function(message)
{
    return message;
};

module.exports.toBeTested = toBeTested;

console.log('Server running at http://127.0.0.1:3000/');