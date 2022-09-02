// loading
let loading = document.querySelector(".loading");
window.onload = function () {
  loading.style.display = "none";
};

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

// Swiper images

const swiper = new Swiper(".swiper-1", {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// secound swiper
const swiperr = new Swiper(".swiper-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    425: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

    992: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
  autoplay: {
    delay: 4000,
    // disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".slider .swiper-button-next",
    prevEl: ".slider .swiper-button-prev",
  },
});

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
    } else if (this.classList.contains("tab-3")) {
      offIndex = "dinner";
    }
    offers.forEach(function (e) {
      if (e.classList.contains(offIndex)) {
        e.classList.add("active");
      }
    });
  };
});
