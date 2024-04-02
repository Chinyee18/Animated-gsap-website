
const box = document.querySelector("#jsi-hex-container");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.5;

window.addEventListener("mousemove", e => {    
  mouse.x = e.x;
  mouse.y = e.y;  
});

gsap.ticker.add(() => {
  
  // adjust speed for higher refresh monitors
  const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
  pos.x += (mouse.x - pos.x) * dt;
  pos.y += (mouse.y - pos.y) * dt;
  
  gsap.to("#hex-container", {duration: 1, 
    rotation: mouse.x / window.innerWidth *6, 
  y: mouse.y / 6});
  gsap.to("#hex-container", {duration: 1, 
    rotation: mouse.y / window.innerHeight *6, 
  y: mouse.y / 6});
});
