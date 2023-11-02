"use strict";

const sharebutton = document.querySelector(".article__button");
const socials = document.querySelector(".socials");

sharebutton.addEventListener("click", function (e) {
  e.stopPropagation();
  socials.style.display = "flex";
  socials.style.animation = "fadein .1s ease-in-out";
  socials.style.opacity = 1;

  socials.addEventListener("mouseleave", function () {
    socials.style.display = "none";
    socials.style.animation = "fadeout .1s ease-in-out";
  });

  socials.addEventListener("animationend", function () {
    socials.style.animation = "";
  });
  document.addEventListener("click", function (e) {
    if (!socials.contains(e.target)) {
      // socials.style.animation = "fadeout .1s ease-in-out";
      socials.style.display = "none";
    }
  });
});
