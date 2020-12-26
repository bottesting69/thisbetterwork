var Client = require('mpp-client');
var MPP = new Client("wss://www.multiplayerpiano.com:443");
var defaultRoom = "Void";
var botName = "It works!";
MPP.setChannel (defaultRoom);
MPP.start();

// On connect //
MPP.on("connect", function() {
	setTimeout(function() {MPP.sendArray([{m: "userset", set: {name: botName}}]);}, 500);
});