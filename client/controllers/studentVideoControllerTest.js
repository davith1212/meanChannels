var myApp = angular.module('myApp');

myApp.controller('studentVideoControllerTest', function ($scope, socket) {
	var activeBox = -1;  // nothing selected
	var aspectRatio = 4/3;  // standard definition video aspect ratio
	var maxCALLERS = 1;
	var numVideoOBJS = maxCALLERS+1;
	var layout;
	socket.setup("");
	socket.on("instructorJoin", function (instructorID){
		easyrtc.call(instructorID, null, function(){
			easyrtc.showError(errorCode, errorText);
		})
	})


	easyrtc.dontAddCloseButtons(true);

	var boxUsed = [true, false, false, false];
	var connectCount = 0;


	
	function updateMuteImage(toggle) {
	    var muteButton = document.getElementById('muteButton');
	    if( activeBox > 0) { // no kill button for self video
	        muteButton.style.display = "block";
	        var videoObject = document.getElementById( getIdOfBox(activeBox));
	        var isMuted = videoObject.muted?true:false;
	        if( toggle) {
	            isMuted = !isMuted;
	            videoObject.muted = isMuted;
	        }
	        muteButton.src = isMuted?"images/button_unmute.png":"images/button_mute.png";
	    }
	    else {
	        muteButton.style.display = "none";
	    }
	}


	function killActiveBox() {
	    if( activeBox > 0) {
	        var easyrtcid = easyrtc.getIthCaller(activeBox-1);
	        collapseToThumb();
	        setTimeout( function() {
	            easyrtc.hangup(easyrtcid);
	        }, 400);
	    }
	}


	function muteActiveBox() {
	    updateMuteImage(true);
	}



	function callEverybodyElse(roomName, otherPeople) {
		console.log("ROOM NAME", roomName);
		console.log("OTHER PEOPLE", otherPeople);
	    easyrtc.setRoomOccupantListener(null); // so we're only called once.
	    socket.emit("instructorCheck", roomName);
	}
	function loginSuccess() {
	}
	function messageListener(easyrtcid, msgType, content) {
	}

	function appInit() {
	    // Prep for the top-down layout manager
	    updateMuteImage(false);


	    easyrtc.setRoomOccupantListener(callEverybodyElse);
	    easyrtc.easyApp("easyrtc.multiparty", "box1", ["box0"], loginSuccess);
	    easyrtc.setPeerListener(messageListener);
	    easyrtc.setDisconnectListener( function() {
	        easyrtc.showError("LOST-CONNECTION", "Lost connection to signaling server");
	    });
	    easyrtc.setOnCall( function(easyrtcid, slot) {
	        console.log("getConnection count="  + easyrtc.getConnectionCount() );
	        boxUsed[slot+1] = true;
	        if(activeBox == 0 ) { // first connection
	            collapseToThumb();
	        }
	    });


	    easyrtc.setOnHangup(function(easyrtcid, slot) {
	        boxUsed[slot+1] = false;
	        if(activeBox > 0 && slot+1 == activeBox) {
	            collapseToThumb();
	        }
	        setTimeout(function() {
	        },20);
	    });
	}
	appInit();
})