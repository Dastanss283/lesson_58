//Задание №1
function showSplashScreen() { 
	var elem = document.getElementById("page-splash"); 
	if (elem.style.display == "none") {
		elem.style.display = "block"; 
	}else{ 
		elem.style.display = "none"; 
		console.log(elem); 
	}
}

showSplashScreen();

function hideSplashScreen() { 
	var elem = document.getElementById("page-splash"); 
	
	if (elem.style.display == "none") {
		elem.classList.remove("no-scroll");
	}
}
hideSplashScreen();

//Задание №2
function createCommentElement(comment) { 
	var comment = document.getElementsByClassName("py-2 pl-3"); 
	for(i = 0; i < comment.length; i++) { 
		return console.log(comment[i]); 
	}
}
createCommentElement();
//второй div с классом py-2 pl-3 внутри комента не вывелся
//это потому что они повтаряются?
//в условии написано про обьект правильно ли я сделал?

//№3

function createPostElement(post) { 
var img = new Image(); 
img.src = 'comment.jpg';
var post = document.getElementsByClassName("d-bloc kw-100");
post.innerHTML="<img src='img'>";
console.log(post); 
return post; 
}
createPostElement(); 





