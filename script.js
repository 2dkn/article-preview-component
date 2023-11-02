"use strict";

const sharebutton = document.querySelector(".article__button");
const socials = document.querySelector(".socials");

sharebutton.addEventListener("click", function () {
  socials.style.display = "flex";
  socials.style.animation = "fadeIn .3s ease-in-out";
  socials.style.opacity = 1;

  socials.addEventListener("mouseleave", function () {
    socials.style.display = "none";
  });

  socials.addEventListener("animationend", function () {
    socials.style.animation = "";
  });
});
