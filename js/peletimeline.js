/*
	Name : Pele Timeline
	Create : Le Viet Quang (quang.le@ringierstudios.com)
	Date : 30 - 8 -2012
	Version : 1.0
	Project : FIFA Football App
*/

var year = [];
var dot = [];
var content =  [];
var next = null;
var _back = null;
var current = 0;
var isMove = false;

function GoNext(){
	if(current>=8) return;
	if(isMove == true) return;
	isMove = true;
	content[current+1].style.left = "951px";
	content[current+1].style.display = "block";
	content[current].style.webkitTransitionDuration = "1000ms";
	content[current+1].style.webkitTransitionDuration = "1000ms";
	setTimeout(function(){
		content[current+1].style.left = "0px";
		content[current].style.left = "-951px";
		setTimeout(function(){
			content[current].style.webkitTransitionDuration = "0ms";
			content[current].style.display = "none";
			year[current].className = "year-bur";
			year[current+1].className = "year-forcus";
			dot[current].className = "dot-bur";
			dot[current+1].className = "dot-forcus";
			current = current + 1;
			isMove = false;
			if(current == 8){
				next.className = "button-blur";
				_back.className = "button-forcus";
			}
			else{
				next.className = "button-forcus";
				_back.className = "button-forcus";
			}
		},1020);
	},10);
}

function GoBack(){
	if(current<=0) return;
	if(isMove == true) return;
	isMove = true;
	content[current-1].style.left = "-951px";
	content[current-1].style.display = "block";
	content[current].style.webkitTransitionDuration = "1000ms";
	content[current-1].style.webkitTransitionDuration = "1000ms";
	setTimeout(function(){
		content[current-1].style.left = "0px";
		content[current].style.left = "951px";
		setTimeout(function(){
			content[current].style.webkitTransitionDuration = "0ms";
			content[current].style.display = "none";
			year[current].className = "year-bur";
			year[current-1].className = "year-forcus";
			dot[current].className = "dot-bur";
			dot[current-1].className = "dot-forcus";
			current = current - 1;
			isMove = false;
			if(current == 0){
				next.className = "button-forcus";
				_back.className = "button-blur";
			}
			else{
				next.className = "button-forcus";
				_back.className = "button-forcus";
			}
		},1020);
	},10);
}


window.onload = function(){
	document.body.addEventListener('touchmove', function(e){e.preventDefault();},false);
	next = document.getElementById("next");
	_back = document.getElementById("back");
	for(var i = 0; i< 9; i++){
		var name1 = "year" + (i+1);
		var name2 = "dot" + (i+1);
		var name3 = (i+1);
		year[i] = document.getElementById(name1);
		dot[i] = document.getElementById(name2);
		content[i] = document.getElementById(name3);
	}
	content[0].style.webkitTransitionduration = "1000ms";
	
	next.addEventListener("click",GoBack,false);
	_back.addEventListener("click",GoNext,false);
}