
let currntScroll = document.documentElement.scrollTop;
let scHeight = document.documentElement.scrollHeight;
let clientHeight = document.documentElement.clientHeight;

function showSearchBox(){
    document.getElementById("textBox").style.display = "block";
    document.getElementById("searchIconInBox").style.display = "block";
};
function hideTextBox(){
    document.getElementById("textBox").style.display = "none";
    document.getElementById("searchIconInBox").style.display = "none";
};
function showModal(){
    document.querySelector("#counselingModal").style.display = "block";  
    let bodyStyle = document.querySelector("body"); 
    bodyStyle.style.overflowY = "hidden";
};
function hideCounselingModal(){
    document.querySelector("#counselingModal").style.display = "none";
    let bodyStyle = document.querySelector("body");
    bodyStyle.style.overflowY = "scroll";  
};

///////////////////////////////////////////////////////////////////////////////////
// تغییر تصویر ثابت صفحه
function showNewImage(){
    let qomrokImage = document.querySelector('#qomrokImage');

    if(window.scrollY > 640 ){
        qomrokImage.src = "./tmrImages/vecteezy_white-3d-background.jpg";

    }else{
        qomrokImage.src = "./tmrImages/Qomrok.jpg";

    }
}
window.addEventListener('scroll', showNewImage ); 

window.addEventListener('scroll', (e) => {

    showNewImage();

    let btnGoToUp = document.querySelector('.goToUp');

    let showGoUp = (window.scrollY + window.innerHeight);
    console.log(showGoUp)
    if( showGoUp > 700){

 
        btnGoToUp.style.display = "block";
    }else{
        btnGoToUp.style.display = "none";

    }


    btnGoToUp.addEventListener('click', (e)=>{
        e.preventDefault();
        window.scrollTo({
            top:0 , left:0 , behavior: "smooth"
          })
        })
})



function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


function moveNav() {
    let mainHeader = document.getElementById('main-header');
    let header = document.querySelector('.header');
    let secondHeader = document.querySelector('.header2');
    let mainNav = document.getElementById('main-nav');


    let navScroll = window.scrollY;
    if (navScroll > 80) {
        mainHeader.style.height = "70px";
        header.style.display = "none";
        secondHeader.style.display = "block";
        mainNav.style.display = "none";

    }else{
        mainHeader.style.height = "35px";
        header.style.display = "block";
        mainNav.style.display = "block";
        secondHeader.style.display = "none";

    }
}
window.addEventListener('scroll', moveNav);















// حالا یه تابع داخل جاوااسکریپت نوشتم که وقتی به اندازه ۲۰۰پیکسل بسمت پایین اسکرول شد، دکمه خودشو نشون بده

// function MyBtn_GoUp(){
//  var Btn_GoUp = document.getElementById("button");
//  if( window.pageYOffset > 200 ){
//   Btn_GoUp.classList.add("show")
//  }else{
//   Btn_GoUp.classList.remove("show");
//  }
// }
