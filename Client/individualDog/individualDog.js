const btnShowHideDetail = document.getElementById("hideShowButton");
const extraDetails = document.querySelectorAll(".extraDetail");

const dogImages = document.getElementsByClassName("dog-image");
let currentImage = 1;
slideshow = setInterval("changeSlides(1)", 10000);
selectSlides(currentImage);

let extraDetailsActive = false;
const detailsButtonHandler = function (e) {
  e.preventDefault();
  extraDetailsActive = !extraDetailsActive;

  if (extraDetailsActive) {
    extraDetails.forEach((detail) => {
      detail.style.display = "block";
    });
    btnShowHideDetail.innerHTML = "Hide details";
  } else {
    btnShowHideDetail.innerHTML = "More details";
    extraDetails.forEach((detail) => {
      detail.style.display = "none";
    });
  }
};

btnShowHideDetail.addEventListener("click", detailsButtonHandler);

function selectSlides(n) {
  display(currentImage = n);
}

function changeSlides(n) {
  display(currentImage += n);
}

function display(n) {
  clearInterval(slideshow);
  slideshow = setInterval("changeSlides(1)", 10000);
  let i;
  const selectorButtons = document.getElementsByClassName("selector-buttons");

  if (n > dogImages.length) { currentImage = 1 }
  if (n < 1) { currentImage = dogImages.length }
  for (i = 0; i < dogImages.length; i++) {
    dogImages[i].style.opacity = "0";
  }

  for (i = 0; i < selectorButtons.length; i++) {
    selectorButtons[i].className = selectorButtons[i].className.replace(" selected", "");
  }

  dogImages[currentImage - 1].style.opacity = "1";
  selectorButtons[currentImage - 1].className += " selected"
}
