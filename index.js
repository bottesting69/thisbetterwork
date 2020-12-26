var Client = require('mpp-client-xt');
var MPP = new Client("wss://www.multiplayerpiano.com:443");
MPP.setChannel ("Void");
MPP.start();