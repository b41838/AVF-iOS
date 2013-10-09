// JavaScript Document

$('#instagramFeed').on('pageinit', function() {

	// Instagram API
	
	// get variable from textbox
		$("#instaButton").on("click", function() {
			var tag = $("#hashtag").val();
			console.log(tag);
			
		});
	
	var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=9a4423b4dfdd4111a73d4bd39082f519&amp;count=12";
	
	$.getJSON(url, getFeed);
});

//function getFeed(info) {
var getFeed = function(info) {

	console.log(info);
	
	$("#instagramStatus").html("<h2>Instagram Results:</h2>");
	
	$.each(info.data, function(index, photo) {  // index is position in array of info.data
		var pic = "<li><img src='" + photo.images.thumbnail.url + "' alt='" + photo.user.id + "' /><h4>" + photo.user.full_name + 			", <em>(" + photo.user.name +")</em></h4></li>";
		$("#pullFeed").append(pic);
	}); // end each
	
	$("li:nth-child(3n+1)").addClass("ui-block-a");
	$("li:nth-child(3n+2)").addClass("ui-block-b");
	$("li:nth-child(3n+3)").addClass("ui-block-c");
}; // end screenOutput