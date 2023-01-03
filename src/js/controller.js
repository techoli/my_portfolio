"use strict";

// My implementation portfolio start
const b = document.querySelectorAll(".section_slide");
console.log(b);
b.forEach(function (el, i) {
  console.log(el);
  console.log(i);
  el.style.transform = `translateX(${i * 100}%)`;
});

const slider = function () {
  const slides = document.querySelectorAll(".section_slide");
  const sliderzz = document.querySelector(".slider");
  const rightBtnslide = document.querySelector(".slider__btn--right");
  const leftBtnslide = document.querySelector(".slider__btn--left");
  const dotContainer = document.querySelector(".dots");
  const Mnav = document.querySelector(".nav");
  const btncontact = document.querySelector(".btn--text");
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  const closeModal = document.querySelector(".btn--close-modal");
  const worsDet = document.querySelector(".sslide--2");
  //   console.log(worsDet);
  let currentSlide = 0;
  const maxslide = slides.length;
  //   sliderzz.style.overflow = "visible";

  // activateDot(0);

  const createDot = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((sli) => sli.classList.remove("dots__dot--active"));
    document
      .querySelector(`.dots__dot[data-slide = "${slide}"]`)
      .classList.add("dots__dot--active");
  };

  //function to change opacity of nav when dot is clicked
  const changeNav = function (val) {
    console.log(val);
    const TTT = document.querySelectorAll(".nav__link");
    TTT.forEach(function (el, i) {
      console.log(el.dataset.nav);
      const navVal = el.dataset.nav;
      if (+(navVal - 1) === +val) {
        el.style.opacity = 1;
      } else {
        el.style.opacity = 0.5;
      }
    });

    console.log(TTT);
  };

  //checking
  const navAnimation = function (e) {
    const hittarg = e.target.classList.contains("nav__link");
    if (hittarg) {
      // console.log(this);
      const link = e.target;

      const sib = e.target.closest(".nav").querySelectorAll(".nav__link");

      sib.forEach((el) => {
        if (el !== link) el.style.opacity = this;
      });
    }
  };

  Mnav.addEventListener("mouseover", navAnimation.bind(0.5));

  Mnav.addEventListener("mouseout", navAnimation.bind(1));

  //checking end

  const goToslide = function (slide) {
    slides.forEach((sly, i) => {
      // console.log(i);
      sly.style.transform = `translateX(${(i - slide) * 100}%)`;
    });
  };

  const nextSlide = function () {
    if (currentSlide === maxslide - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToslide(currentSlide);
    activateDot(currentSlide);
    changeNav(currentSlide);
  };
  const prevSlide = function () {
    if (currentSlide === 0) {
      currentSlide = maxslide;
    }
    currentSlide--;
    goToslide(currentSlide);
    activateDot(currentSlide);
    changeNav(currentSlide);
  };

  const initialize = function () {
    goToslide(0);
    createDot();
    activateDot(0);
  };
  initialize();

  // slider.style.transform = 'scale(0.3) translateX(-1200px)';
  // slider.style.overflow = 'visible';

  rightBtnslide.addEventListener("click", nextSlide);
  leftBtnslide.addEventListener("click", prevSlide);
  document.addEventListener("keydown", function (e) {
    // console.log(e);
    if (e.key === "ArrowRight") {
      nextSlide();
    }
    e.key === "ArrowLeft" && prevSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToslide(slide);
      activateDot(slide);
      changeNav(slide);
    }
  });
  Mnav.addEventListener("click", function (e) {
    e.preventDefault();
    const btn = +e.target.dataset.nav - 1;
    console.log(btn);
    goToslide(btn);
    activateDot(btn);
    changeNav(btn);
  });

  [btncontact, overlay, closeModal].forEach((el) =>
    el.addEventListener("click", function () {
      modal.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    })
  );
  // responsive works
  worsDet.addEventListener("mouseover", function (e) {
    const hasTarget = e.target.classList.contains("port_list_item_btn");

    if (!hasTarget) return;
    const checkclick = e.target;
    const element = checkclick
      .closest(".sslide--2")
      .querySelectorAll(".port_list_item_btn")
      // console.log(element);
      .forEach((el) => {
        if (el !== checkclick) el.style.opacity = 0.5;
      });
  });
  worsDet.addEventListener("mouseout", function (e) {
    const hasTarget = e.target.classList.contains("port_list_item_btn");

    if (!hasTarget) return;
    const checkclick = e.target;
    const element = checkclick
      .closest(".sslide--2")
      .querySelectorAll(".port_list_item_btn")
      // console.log(element);
      .forEach((el) => {
        if (el !== checkclick) el.style.opacity = 1;
      });
  });
};
slider();
// My implementation portfolio start
