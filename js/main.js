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
