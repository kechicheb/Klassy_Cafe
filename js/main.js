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

// header display none when onclick any link
let link = document.querySelectorAll("header .container > ul.links li a ");
let ulLinks = document.querySelector("header .container > ul.links");
if (parseInt(window.screen.width) < 767) {
  link.forEach(function (e) {
    e.onclick = function () {
      ulLinks.style.display = "none";
      nav.classList.remove("active");
    };
  });
}
if(parseInt(window.screen.width) > 767) {
  ulLinks.style.display = "flex";
}
window.onresize  =function () {
  if (parseInt(window.screen.width) < 767) {
    link.forEach(function (e) {
      e.onclick = function () {
        ulLinks.style.display = "none";
        nav.classList.remove("active");
      };
    });
  }
  if(parseInt(window.screen.width) > 767) {
    ulLinks.style.display = "flex";
  }

};

// loading
let loading = document.querySelector(".loading");
window.onload = function () {
  loading.style.display = "none";
};
console.log(window.screen.width);
