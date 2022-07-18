var WebSocketClient = require('websocket').client;
var ws = require("nodejs-websocket");
var fs = require('fs')
var json = [];
const settings = require("./settings.json")

var reload;

function getFMS() {
    
    var client = new WebSocketClient();

    client.on('connectFailed', error => {
        console.log('Try to connect to FMS...');

        setTimeout(function(){ getFMS(); }, 1000);
    });
    
    client.on('connect', connection => {
        clearInterval(reload);
        console.log('FMS Client Connected');
        connection.on('error', error => {
            console.log("Connection Error: " + error.toString());
        });
        connection.on('close', data => {
            console.log('FMS Connection Closed');
            json = '[{"name":null,"x":null,"y":null,"rotation":null}]';
            getFMS();
        });
        connection.on('message', message => {
                json = message.utf8Data;
        });
    });
    
    client.connect('ws://127.0.0.1:' + settings.wsPort + '/ws', null, "https://" + settings.wsDomain, null, null);

}

getFMS();

var options = {
	secure: true,
	key: fs.readFileSync(settings.privkeyPath),
	cert: fs.readFileSync(settings.pubkeyPath)
}

var server = ws.createServer(options, function (conn) {

	conn.on("close", function (code, reason) {

	});
    conn.on("error", function (e) {
        
    })
}).listen(6996);

function broadcast(server, msg) {
	server.connections.forEach(function (conn) {
		conn.sendText(msg);
	});
}
setInterval(function(){ broadcast(server, json) }, 120);