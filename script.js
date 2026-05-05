const images = [
  "images/father.jpg",
  "images/hifazat.webp",
  "images/qonot.jpg",
  "images/tarawih.webp",
  
];

const btn = document.getElementById("btn");
const img = document.getElementById("duaImage");

btn.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * images.length);
  img.src = images[randomIndex];
  img.style.display = "block";
});