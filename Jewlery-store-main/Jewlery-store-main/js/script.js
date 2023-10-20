//NAV

const navList = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", function () {
  navList.classList.toggle("show");
  console.log("clicked");
});

//date
const spanDate = document.querySelector(".date");
 let currentYear = new Date().getFullYear();
spanDate.innerHTML = currentYear;

window.addEventListener("scroll",function(){
  var header=document.querySelector("nav");
  nav.classList.toggle("sticky",window.scrollY > 0);
})

const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})
function openSignInWindow() {
  var overlay = document.getElementById("overlay");
  var signInWindow = document.getElementById("signin-window");
  overlay.classList.add("show");
  signInWindow.classList.add("show");
}

function closeSignInWindow() {
  var overlay = document.getElementById("overlay");
  var signInWindow = document.getElementById("signin-window");
  overlay.classList.remove("show");
  signInWindow.classList.remove("show");
}

window.onload = openSignInWindow;



// new navbar
window.addEventListener("scroll",function(){
  var header=document.querySelector("header");
  header.classList.toggle("sticky",window.scrollY > 0);
})