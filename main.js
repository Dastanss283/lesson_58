var body = document.body.classList
//Задание №1
function showSplashScreen() { 
	var elem = document.getElementById("page-splash"); 
	body != 'no-scroll' ? body.add('no-script') : null 

		if(elem){
			elem.style.display = 'block'	
		}; 
	}

// showSplashScreen();

function hideSplashScreen() {
	var elem = document.getElementById("page-splash"); 
	body == 'no-scroll' ? body.remove('no-scroll') : null 
	if (elem) {
		elem.style.display = 'none';
	};
}


//Задание №2
function createCommentElement(comment) { 
	var comment = document.getElementsByClassName("py-2 pl-3"); 
	for(i = 0; i < comment.length; i++) { 
		 console.log(comment[i]);
	};
}

createCommentElement();

//№3

function createPostElement(post) { 
var img = new Image(); 
img.src = 'comment.jpg';
var post = document.getElementsByClassName("d-bloc kw-100");
post.innerHTML="<img src='img'>";
return console.log(post);; 
}
createPostElement();
//#4

addPost(postElement); {
var postElement = document.createElement("div");
postElement.innerHTML = as;
document.getElementsByTagName('body')[0].appendChild(div);
}
