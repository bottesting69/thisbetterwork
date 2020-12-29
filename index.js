var Client = require('mpp-client');
var MPP = new Client("wss://www.multiplayerpiano.com:443");
MPP.setChannel ("Void");
MPP.start();
