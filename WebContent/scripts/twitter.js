function readRSS(source,target) {
	items = source.getElementsByTagName("item");
	for (i=0;i<items.length;i++) {
		title = items[i].getElementsByTagName("title")[0].innerHTML;
		link = items[i].getElementsByTagName("link")[0].innerHTML;
		target.innerHTML += "<a href='"+link+"'>"+title+"</a>";
	}
}

//For Loading Feed as External XML
function loadRSS(){
	var layer;
	var doc;
	layer = document.getElementById("twitter");
	doc = new XMLHttpRequest();
	doc.load("http://twitter.com/statuses/user_timeline/26981005.rss");
	doc.onreadystatechange = function () {
		if(doc.readyState==4) {
			readRSS(doc.responseXML,layer);
		}
	}
}