// JavaScript Document

// The watch id references the current `watchAcceleration`
    var watchID = null;
	
document.addEventListener("deviceready", onDeviceReady, false);

// native variables
var getAccel, getGeo;

// device APIs are available
function onDeviceReady() {
	console.log("Lets do this");
//	$('#flick').on('pageinit', getInfo);
	$('#geo').on('pageinit', getGeo);
	$('#accel').on("pageinit", getAccel);
}


	
$('#instagramFeed').on('pageinit', function() {

	// Instagram API
});

// Instagram API
	
// get variable from textbox
function getVar() {
	$("#instagram").on("click", "#instaButton", function() {
			console.log("hi");
			var tag = $("#hashtag").val();
			console.log(tag);
			
	var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=9a4423b4dfdd4111a73d4bd39082f519&amp;count=12";
	
	$.getJSON(url, getFeed);
	
	});
}

var getFeed = function(info) {

	console.log(info);
	console.log(info.data.length);

	$("#instagramStatus").html("<h2>Instagram Results:</h2>");
	
	$.each(info.data, function(index, photo) {  // index is position in array of info.data
		var pic = "<li><img src='" + photo.images.thumbnail.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + 			", <em>(" + photo.user.name +")</em></h4></li>";
		$("#pullFeed").append(pic);
	}); // end each
	
	$("li:nth-child(3n+1)").addClass("ui-block-a");
	$("li:nth-child(3n+2)").addClass("ui-block-b");
	$("li:nth-child(3n+3)").addClass("ui-block-c");
}; // end screenOutput

$('#geo').on('pageinit', function() {
	function success(position) {
		var myMap = document.createElement('section');
		myMap.id = 'geoMap';
		myMap.style.height = '400px';
		myMap.style.width = '600px';
		
		document.querySelector('article').appendChild(myMap);
		
		var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
		
		var options = { 
			zoom: 15,
			center: coords,
			mapTypeControl: false,
			navigationControlOptions: {
				style: google.maps.NavigationControlStyle.SMALL
		},
		
		mapTypeId: google.maps.MapTypeId.ROADMAP
		
		};
		
		var map = new google.maps.Map(document.getElementById("geoMap"), options);
		
		var marker = new google.maps.Marker({
			position: coords,
			map: map,
			title:"You are here!"
		});
	}
		
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	} else {
		error('Geolocation is not supported');
	}
	
	navigator.geolocation.getCurrentPosition(geoWin, geoFail);

	// if successful get latitude and longitude for users current location
	function geoWin(position) {
		var element = document.getElementById('geolocation');
		element.innerHTML = 'Latitude: '           + position.coords.latitude           + '<br />' +
							'Longitude: '          + position.coords.longitude			+ '<br />';
							//'Timestamp: '          + position.timestamp                 + '<br />'
	}

	// if fail throw error
	function geoFail(error) {
		alert('code: '    + error.code    + '\n' +
			  'message: ' + error.message + '\n');
	};
});

// Accelerometer
function onSuccess(acceleration) {
	alert("hello");
    alert('Acceleration X: ' + acceleration.x + '\n' +
          'Acceleration Y: ' + acceleration.y + '\n' +
          'Acceleration Z: ' + acceleration.z + '\n' +
          'Timestamp: '      + acceleration.timestamp + '\n');
};

function onError() {
	alert('onError!');
};
	
var getAccel = function() {
	navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
};

//var getInfo = function() {
//		var element = document.getElementById('deviceProperties');
//        element.innerHTML = 'Device Name: '     + device.name     + '<br />' +
//                            'Device Cordova: '  + device.cordova  + '<br />' +
//                            'Device Platform: ' + device.platform + '<br />' +
//                            'Device UUID: '     + device.uuid     + '<br />' +
//                            'Device Model: '    + device.model    + '<br />' +
//                            'Device Version: '  + device.version  + '<br />';
//};