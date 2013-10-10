// JavaScript Document

$('#instagramFeed').on('pageinit', function() {

	// Instagram API
	
	// get variable from textbox
	function getVar() {
	
//	var getVar = function() {
		//$("#instagram").on("click", "#instaButton", function() {
			console.log("hi");
			var tag = $("#hashtag").val();
			console.log(tag);
			
		//});
	};
	
	var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=9a4423b4dfdd4111a73d4bd39082f519&amp;count=12";
	
	$.getJSON(url, getFeed);

});

function getVar() {
	$("#instagram").on("click", "#instaButton", function() {
			console.log("hi");
			var tag = $("#hashtag").val();
			console.log(tag);
			
	var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=9a4423b4dfdd4111a73d4bd39082f519&amp;count=12";
	
	$.getJSON(url, getFeed);
	
	});
}

	
//function getFeed(info) {
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

$('#qr').on('pageinit', function() {
function success(position) {
	var mapcanvas = document.createElement('div');
	mapcanvas.id = 'mapcontainer';
	mapcanvas.style.height = '400px';
	mapcanvas.style.width = '600px';
	
	document.querySelector('article').appendChild(mapcanvas);
	
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
	
	var map = new google.maps.Map(document.getElementById("mapcontainer"), options);
	
	var marker = new google.maps.Marker({
		position: coords,
		map: map,
		title:"You are here!"
	});
}
	
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success);
} else {
	error('Geo Location is not supported');
}
/*	var map;

	function initialize() {
	  var mapOptions = {
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	  };
	  map = new google.maps.Map(document.getElementById('map-canvas'),
		  mapOptions);
	
	  // Try HTML5 geolocation
	  if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
		  var pos = new google.maps.LatLng(position.coords.latitude,
										   position.coords.longitude);
	
		  var infowindow = new google.maps.InfoWindow({
			map: map,
			position: pos,
			content: 'Location found using HTML5.'
		  });
	
		  map.setCenter(pos);
		}, function() {
		  handleNoGeolocation(true);
		});
	  } else {
		// Browser doesn't support Geolocation
		handleNoGeolocation(false);
	  }
	}
	
	function handleNoGeolocation(errorFlag) {
	  if (errorFlag) {
		var content = 'Error: The Geolocation service failed.';
	  } else {
		var content = 'Error: Your browser doesn\'t support geolocation.';
	  }
	
	  var options = {
		map: map,
		position: new google.maps.LatLng(60, 105),
		content: content
	  };
	
	  var infowindow = new google.maps.InfoWindow(options);
	  map.setCenter(options.position);
	}
	
	google.maps.event.addDomListener(window, 'load', initialize);*/
});