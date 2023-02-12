"use strict";
const starsRec = document.getElementById("starsRectangle");
const stars = document.querySelectorAll(".star");

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", () => {
    for (let y = 0; y < stars.length; y++) {
      if (y <= i) {
        stars[y].classList.replace("star", "enable");
      } else {
        stars[y].classList.replace("enable", "star");
      }
    }
  });
}

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("mouseover", () => {
    for (let y = 0; y < stars.length; y++) {
      if (y <= i) {
        stars[y].classList.replace("star", "enable");
      } else {
        stars[y].classList.replace("enable", "star");
      }
    }
  });
}

starsRectangle.addEventListener("mouseleave", () => {
  for (let i = 0; i < stars.length; i++) {
    stars[i].classList.replace("enable", "star");
  }
});
