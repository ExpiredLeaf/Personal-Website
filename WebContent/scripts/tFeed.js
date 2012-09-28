//	items = "http://twitter.com/statuses/user_timeline/26981005.json".getElementsByTagName("item");
function processTheseTweets(jsonData){

	var shtml = '';
	var results = jsonData.results;
	if(results){

		// if there are results (it should be an array), loop through it with a jQuery function
		$.each(results, function(index,value){
			shtml += "<p class='title'><span class='author'>" + value.from_user + "</span>: " +
			value.text + "<span class='date'>" + value.created_at + "</span></p>";
		});

	// Load the HTML in the #tweet_stream div
	$("#twitter").html( shtml );
	}

}



jQuery(function(){
	// Execute this code when the page is ready to work

	// Create a Script Tag
	var script=document.createElement('script');
	script.type='text/javascript';
	//script.src= "http://twitter.com/statuses/user_timeline/26981005.json?&callback=processTheseTweets&_="+ new Date().getTime();
	script.src= "http://search.twitter.com/search.json?&q=apple&callback=processTheseTweets&count=3&_="+ new Date().getTime();
	//script.src="http://api.twitter.com/1/statuses/user_timeline.json?user_id=26981005&count=5&include_rts=1";
	//script.src="http://twitter.com/statuses/user_timeline/aauminho.json?callback=processTheseTweets&count=1";
	//script.src= "http://twitter.com/statuses/user_timeline/expiredleaf.json?callback=processTheseTweets&count=3";
	processTheseTweets(script);

	// Add the Script to the Body element, which will in turn load the script and run it.
	$("body").append(script);

});