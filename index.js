
//Hide certain elements when the window is at a certain size:
//check for window resize

function resizeEvent(){
  $( document ).ready(function() {
    var windowHeight = window.innerHeight
    var windowWidth = window.innerWidth
    var tbbtns = document.getElementById("top_bar")
    var newBox = document.getElementById('newBox')
    var newBoxWN = document.getElementById('whatsNew')
    var newImgs = document.getElementById('SNewImgs');
    let windowArea = windowHeight * windowWidth

    console.log("area: ", windowArea)

    //check to see if the window is too small to fit certain content
    //if so the content is either removed or altered
    if (windowWidth < 1335){
      newBoxWN.innerHTML = 'New:';
      newBoxWN.style.fontSize = '40px';
      newBoxWN.style.padding = '10px';
    }
    else{
      newBoxWN.innerHTML = 'what\'s new';
      newBoxWN.style.fontSize = '40px';
      newBoxWN.style.display = 'block';
      newBoxWN.style.padding = '20px';
    }

    if (windowWidth < 1170){
      
      newImgs.style.display = 'none';
    }
    else{
      newImgs.style.display = 'block';
    }
    if (windowWidth < 630){
      tbbtns.style.display = "none"
      newBox.style.display = 'none'
      newBoxWN.style.display = 'none'
    }
    else{
      tbbtns.style.display = "block"
      newBox.style.display = 'block'
      newBoxWN.style.display = 'block'
    }
    
    if (windowHeight < 569){
      let newBoxPer = ((windowHeight/569) * 100) - 56.4;
      newBox.style.height = newBoxPer + "%";

    }
    else{
      newBox.style.height = "56.4%"
    }
    //Changing the overflow incase some content gets hidden on a smaller screen
    if (windowHeight * windowWidth <= 20000) {
      console.log('check')
      newBox.style.overflowY = "scroll";
    }
    else{
      newBox.style.overflowY = "none";
    }
    console.log("Height: " + window.innerHeight)
    console.log("Width:  " + window.innerWidth)
    return;
  
  });
}

window.addEventListener("resize", resizeEvent);

resizeEvent();

//Funtions to make the download transitions better
$(document).ready(function(){
  let demoDl = document.getElementById('demoDl')
  let demoHcheck = 1;

  $(document).mousemove(function(){
    
      if(($("#oculusDl:hover").length != 0 || $("#steamDl:hover").length != 0)){
        demoDl.style.transitionDelay = '0ms'
        demoHcheck = 0;
      } else if (($("#oculusDl:hover").length == 0 || $("#steamDl:hover").length == 0) && (demoHcheck == 0)){
        demoDl.style.transitionDelay = '700ms'
        demoHcheck = 1;
      } else if ($("#demoDl:hover").length != 0 && demoHcheck == 1){
        demoDl.style.transitionDelay = '0ms'
      }

    //Checking if any of the dl elements are being hovered so to change the pointer-event
    if ($("#oculusDl:hover").length != 0){
      document.getElementById("ocoDlbtn").style.pointerEvents = "auto";
    }
    if ($("#steamDl:hover").length != 0) {
      document.getElementById("stDlbtn").style.pointerEvents = "auto";
    }
    if ($("#demoDl:hover").length != 0){
      document.getElementById("demDlbtn").style.pointerEvents = "auto";
    }
  });

});


//For transitons on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenSections = document.querySelectorAll('.hide')
hiddenSections.forEach((el) => observer.observe(el));


//Slideshow for the game elab section
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }


const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 2750,
      disableOnInteraction: false,
    },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

function secretDuckMove(){
  let duckimg = document.getElementById("duckimg")
  let hidden_text = document.getElementById("duck_hiddenText")
  let secretH3 = document.getElementById("duckH3")
  let secretH4 = document.getElementById("duckH4")
  
  secretH3.style.opacity = "0";
  secretH4.style.opacity = "0";
  hidden_text.style.opacity = "1";

  duckimg.classList.add('duckmoveright');
  duckimg.classList.remove('duckorigin');
}
