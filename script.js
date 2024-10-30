
const up = document.getElementById("drop");
const downs = document.getElementById("drop-down");

up.addEventListener("mouseenter", () => {
    downs.style.opacity = "1";
    downs.style.maxHeight = "10vw";
});
up.addEventListener("mouseleave", () => {
    downs.style.opacity = "0";
    downs.style.maxHeight = "0";
});


  document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });

gsap.from(".img1",{
  opacity:0,
  delay:0.4,
  duration:1,
  y:60
})
gsap.from(".img2",{
  opacity:0,
  delay:0.4,
  duration:1,
  x:60
})
gsap.from(".img3",{
  opacity:0,
  delay:0.4,
  duration:1,
  y:-60
})
gsap.from(".center-text",{
  opacity:0,
  delay:0.4,
  duration:1,
})


gsap.registerPlugin(ScrollTrigger);

gsap.from(".section3 .top", { 
    y: 80, 
    opacity: 0, // End state (normal position, fully visible)
    duration: 1, // Animation duration
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".section3 .top", // Start animation when #section2 enters the viewport
      start: "top 80%", // When the top of #section2 is 80% from the top of the viewport
      scroller:"body",
      
    }
  }
);

gsap.from(".section4 ", { 
  y: 80, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1, // Animation duration
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".section3 .top", // Start animation when #section2 enters the viewport
    start: "top 20%", // When the top of #section2 is 80% from the top of the viewport
    scroller:"body",

  }
}
);
gsap.from(".section5 ", { 
  y: 80, 
  opacity: 0, // End state (normal position, fully visible)
  duration: 1, // Animation duration
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".section5", // Start animation when #section2 enters the viewport
    start: "top 80%", // When the top of #section2 is 80% from the top of the viewport
    scroller:"body",
   
  }
}
);