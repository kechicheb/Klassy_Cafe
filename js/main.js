//Header
let header = document.querySelector("header");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
};

//onclick on features

let features = document.querySelector(
  "header .container > ul.links li:nth-child(5)"
);
let subUl = document.querySelector(
  "header .container > ul.links li:nth-child(5) > ul"
);
features.onclick = function () {
  subUl.classList.toggle("active");
};

// toggle button
let nav = document.querySelector("header .container .nav");
nav.onclick = function () {
  nav.classList.toggle("active");
};

// header display none when onclick any link
let link = document.querySelectorAll(
  "header .container > ul.links li:not(:nth-child(5)) a "
);
let ulLinks = document.querySelector("header .container > ul.links");

link.forEach(function (e) {
  e.onclick = function () {
    if (window.outerWidth < 767) {
      ulLinks.style.display = "none";
      nav.classList.remove("active");
    }
  };
});

// loading
let loading = document.querySelector(".loading");
window.onload = function () {
  loading.style.display = "none";
};

// Tab Offers

let tabs = document.querySelectorAll("section#offers .container  .filters li");
let offers = document.querySelectorAll(
  "section#offers .container .row:last-child > ul"
);
let offIndex = "breakfast";
tabs.forEach(function (e) {
  e.onclick = function () {
    tabs.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");
    offers.forEach(function (e) {
      e.classList.remove("active");
    });
    if (this.classList.contains("tab-1")) {
      offIndex = "breakfast";
    } else if (this.classList.contains("tab-2")) {
      offIndex = "lunch";
    } else if(this.classList.contains("tab-3")){
      offIndex = "dinner";
    }
    offers.forEach(function (e) {
      if (e.classList.contains(offIndex)) {
        e.classList.add("active");
      }
    });
  };
});

console.log(offers);
