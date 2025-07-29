var map = L.map("map").setView([19.8758, 75.3393], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([19.8758, 75.3393])
  .addTo(map)
  .bindPopup("Chhtrapati Sambhajinagar, Maharashtra")
  .openPopup();

const nav = document.querySelector("nav i");
const ul = document.querySelector("ul");
const one = document.querySelector("ul .one");

nav.addEventListener("click", function () {
  ul.style.display = "block";
});

one.addEventListener("click", function () {
  ul.style.display = "none";
});

gsap.to(".img",{
  x:-300,
  duration: 0,
  delay:0,
  opacity:0,  
})

gsap.to(".img",{
  x:-10,
  duration: 1,
  delay:1,
  opacity:1,  
})


