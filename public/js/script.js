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

document.addEventListener("contextmenu", function(e){
  e.preventDefault();
} , false)


gsap.from(".leftsec , .items",{
  x:-400,
  duration: 2,
})

gsap.from(".rightsec , .right",{
  x:300,
  duration: 2,
})
gsap.from(".img",{
  x:-300,
  duration: 2,
  delay:0,
  rotate: 360,
})



