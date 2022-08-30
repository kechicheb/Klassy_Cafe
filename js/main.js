//Header
let header = document.querySelector("header");
window.onscroll = function () {
  if (window.scrollY >= 600) {
   header.classList.add("fixed");
  } else {
   header.classList.remove("fixed");
  }
};

// toggle button
let nav = document.querySelector("header .container .nav");
nav.onclick = function () {
  nav.classList.toggle("active");
};
// loading
let loading = document.querySelector(".loading");
window.onload = function () {
  loading.style.display = "none";
};