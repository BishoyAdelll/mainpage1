let btn = document.getElementById("angle")
let transition = document.getElementById("transition")
window.onscroll = function () {
  if (window.scrollY >= 200) {
    btn.style.display = "block";

  } else {
    btn.style.display = "none";
  }
  if (window.scrollY >= 50) {
    transition.classList.add("transition")

  } else {
    transition.classList.remove("transition")
  }
}
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}








var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween:25,
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:'true',
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    753:{
      slidesPerView: 2,
    },
    975:{
      slidesPerView: 2,
    },
    
    992:{
      slidesPerView: 3,
    }

  }
});
let valueDisplays = document.querySelectorAll(".main");
    let interval =1000;
   
    valueDisplays.forEach((valueDisplay)=>{
      let startValue=0;
      let endValue=parseInt(valueDisplay.getAttribute("data-val"));
      
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function(){
        startValue +=1;
        valueDisplay.textContent =startValue;
        if(startValue == endValue){
          clearInterval(counter);
        }
      },duration);
    });
    