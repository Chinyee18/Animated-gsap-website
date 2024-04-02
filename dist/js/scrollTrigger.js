let primaryColor = '#a50ecb';

gsap.registerPlugin(ScrollTrigger);


gsap.set(".scroll-to-top", { opacity: 0});

gsap.to(".scroll-to-top", {
    opacity: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: ".homepage--title",
      start: "bottom",
      scrub: true
    }, 
    lazy: false
});


// tao
let boxes = gsap.utils.toArray(".box");

boxes.forEach((box, i) => {
   let alphabet = box.querySelector(".alphabet"),
   desc = box.querySelector(".desc"),
      tl = gsap.timeline({
        lazy: false,
            scrollTrigger: {
              trigger: box,
              start: "top 70%",
              end: "top 50%",
              ease: "power3.out",
              scrub: true,
              //markers:true,
              invalidateOnRefresh: true
            }
          });

  tl.fromTo(box, 
    {backgroundColor: 'rgba(241, 235, 247, 0.1)', borderColor:'rgb(255, 255, 255, 0.25)'},
    {backgroundColor: '#07020C'}, 0);
  tl.fromTo(alphabet, 
    {color: 'rgb(255, 255, 255, 0.1)'}, 
    {color: '#a50ecb'},0);
  tl.fromTo(desc, 
      {opacity: 0}, 
      {opacity: 1},0);
});

// --- Creative AI image
gsap.set("#ca-img-3", { y:100, opacity:1});
gsap.set("#ca-img-2", { opacity: 0.2});

gsap.to("#ca-img-3", {
   y:0, opacity:1,
  
  scrollTrigger: {
    trigger: "#gs--ca",
    start: "top 50%",
     end: "bottom",
     ease: "power1.out",
    scrub: true
  }, 
  lazy: false
});

gsap.to("#ca-img-2", {
   opacity: 1,
  
  scrollTrigger: {
    trigger: "#gs--ca",
    start: "top 70%",
    end: "bottom",
     ease: "power1.out",
    scrub: true
  },
  lazy: false 
});


// --- Direct communication images
let cardImages = gsap.utils.toArray(".gs--float");

cardImages.forEach((img, i) => {
  let img_2 = img.querySelector(".img_2")
      tl = gsap.timeline({
        lazy: false,
            scrollTrigger: {
              trigger: img,
              start: "top 50%",
              end: "top 0%",
              ease: "power3.out",
              scrub: true,
              invalidateOnRefresh: true
            }
          });

  tl.fromTo(img_2, 
      {y: 30}, 
      {y: 0}, 0);
});
