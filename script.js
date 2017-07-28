function myFunction() {
					document.getElementById("myDropdown").classList.toggle("show");
				}
				
				function myFunction2() {
					document.getElementById("showmain").classList.toggle("shownavigator");
				}


window.onscroll = function () {
	pix=window.pageYOffset;
}

var toDetails = document.querySelector('#toDetails');
var inter;

toDetails.addEventListener('click', function (event) {
	event.preventDefault();
	if (inter) {
		clearInterval(inter);
	}
	var ref = event.target.getAttribute('href');
	pat(ref);
});

function pat(c) {
	vieta = document.querySelector(c).offsetTop-50;
	inter = setInterval (moveDown,4);
}

function moveDown() {
	if (pix>= vieta){
		clearInterval(inter);
	}
	else {
		pix = pix+20;
		window.scrollTo(0, pix);
	}
}

