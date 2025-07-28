var map = L.map("map").setView([19.8758, 75.3393], 13);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

L.marker([19.8758, 75.3393])
  .addTo(map)
  .bindPopup("Chhtrapati Sambhajinagar, Maharashtra")
  .openPopup();
