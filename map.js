const map = L.map('map').setView([25.309617653466248, 83.00667780910868], 15);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
L.marker([25.309617653466248, 83.00667780910868]).addTo(map).bindPopup('Hotel Ganges Grand').openPopup();