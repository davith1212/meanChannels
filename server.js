// LOAD MODULES
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
// FOR WEBRTC
var http = require('http');
var io = require ('socket.io');
var easyrtc = require('easyrtc');  //do not npm install this, must be placed by hand

// var angularMaterialize = require('angular-materialize');

// Configure Express http Server:
var app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Mongoose and routes hooks
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

// Server Listen
port = 8080
var webServer = app.listen(port, function() {
	console.log('listening on port ', port);
});

//Start socket.io and attatch to the webserver
var socketServer = io.listen(webServer, {"log level":1}); //Turn on logging and debugging

/// EASY RTC STUFF
easyrtc.setOption("logLevel", "debug"); 				//Turn on logging and debugging

// External note: Overriding the default easyrtcAuth listener, only so we can directly access its callback
// Kelvin Note: Wat?
easyrtc.events.on("easyrtcAuth", function(socket, easyrtcid, msg, socketCallback, callback) {
    easyrtc.events.defaultListeners.easyrtcAuth(socket, easyrtcid, msg, socketCallback, function(err, connectionObj){
        if (err || !msg.msgData || !msg.msgData.credential || !connectionObj) {
            callback(err, connectionObj);
            return;
        }

        connectionObj.setField("credential", msg.msgData.credential, {"isShared":false});

        console.log("["+easyrtcid+"] Credential saved!", connectionObj.getFieldValueSync("credential"));

        callback(err, connectionObj);
    });
});

// Extern: To test, lets print the credential to the console for every room join!
// K: Prints out credentials for every room join
easyrtc.events.on("roomJoin", function(connectionObj, roomName, roomParameter, callback) {
    console.log("["+connectionObj.getEasyrtcid()+"] Credential retrieved!", connectionObj.getFieldValueSync("credential"));
    easyrtc.events.defaultListeners.roomJoin(connectionObj, roomName, roomParameter, callback);
});


// Start easyrtc server
var rtc = easyrtc.listen(app, socketServer, null, function(err, rtcRef) {
    console.log("Initiated");

    rtcRef.events.on("roomCreate", function(appObj, creatorConnectionObj, roomName, roomOptions, callback) {
        console.log("roomCreate fired! Trying to create: " + roomName);

        appObj.events.defaultListeners.roomCreate(appObj, creatorConnectionObj, roomName, roomOptions, callback);
    });
});
