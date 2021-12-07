      
document.addEventListener("scroll" ,()=> {

let nav = document.querySelector(".navbar");
let navPosition = window.scrollY > nav.offsetHeight;

document.querySelectorAll(".l").forEach((e)=> {e.classList.toggle("left-nav-item",window.scrollY > nav.offsetHeight? false:true)});

});




document.addEventListener("scroll", function(){
let nav = document.querySelector(".navbar");
let navPosition = window.scrollY > nav.offsetHeight;
nav.classList.toggle("scrolling-active", navPosition );

});


const openPopupButton = document.querySelector("[data-popup-target]");
const overlay = document.getElementById("overlay");

openPopupButton.addEventListener("click", function(){
const popup = document.querySelector(openPopupButton.dataset.popupTarget);
openPopup(popup);
});

overlay.addEventListener("click", function(){
const popup = document.querySelector(".popup-card.active");
closePopup(popup);
})

function openPopup(popup){
if(popup== null) return;
popup.classList.add("active");
overlay.classList.add("active");
}

function closePopup(popup){
if(popup== null) return;
popup.classList.remove("active");
overlay.classList.remove("active");
}



// document.querySelector(".main-img").style.height(100vh + nav.offsetHeight);

// var secondImageHeight = document.querySelector(".sm").offsetHeight;
//   //327 px
//    document.querySelector(".fm").style.height = secondImageHeight + "px";

    