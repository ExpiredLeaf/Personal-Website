function showHome(){
	document.getElementById("home").style.visibility='visible';
	document.getElementById("blog").style.visibility='collapse';
	document.getElementById("cv").style.visibility='collapse';
	document.getElementById("others").style.visibility='collapse';
}

function showBlog(){
	document.getElementById("home").style.visibility='collapse';
	document.getElementById("blog").style.visibility='visible';
	document.getElementById("cv").style.visibility='collapse';
	document.getElementById("others").style.visibility='collapse';
}

function showCV(){
	document.getElementById("home").style.visibility='collapse';
	document.getElementById("blog").style.visibility='collapse';
	document.getElementById("cv").style.visibility='visible';
	document.getElementById("others").style.visibility='collapse';
}

function showLinks(){
	document.getElementById("home").style.visibility='collapse';
	document.getElementById("blog").style.visibility='collapse';
	document.getElementById("cv").style.visibility='collapse';	
	document.getElementById("others").style.visibility='visible';
}