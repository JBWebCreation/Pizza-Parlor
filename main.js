// Responsive menu

var menuBtn = document.getElementById('menuBtn');

var closeBtn = document.getElementById('closeBtn');

var sideMenu = document.getElementById('sideMenu');

menuBtn.addEventListener('click', expand);

closeBtn.addEventListener('click', hide);

function expand() {
	sideMenu.style.width = '200px';
}

function hide() {
	sideMenu.style.width = 0;
}