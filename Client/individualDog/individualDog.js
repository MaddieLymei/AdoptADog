const btnShowHideDetail = document.getElementById("hideShowButton");
const extraDetails = document.querySelectorAll(".extraDetail");

const dogImages = document.getElementsByClassName("dog-image");
let currentImage = 1;

document.addEventListener("DOMContentLoaded", function () {
  let largestHeight = 0;
  for (a = 0; a < dogImages.length; a++) {
    console.log("Dog height: " + dogImages[a].clientHeight);
    if (dogImages[a].clientHeight > largestHeight) {
      largestHeight = dogImages[a].clientHeight;
      console.log(largestHeight);
    }
  }

  for (i = 0; i < dogImages.length; i++) {
    if (dogImages[i].clientHeight < largestHeight) {
      border = (largestHeight - dogImages[i].clientHeight) / 2;
      dogImages[i].style.borderTop = border + 'px solid rgba(5, 109, 104,0.8)';
      dogImages[i].style.borderBottom = border + 'px solid rgba(5, 109, 104,0.8)';
    }
  }
});

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
  let i;
  const selectorButtons = document.getElementsByClassName("selector-buttons");

  if (n > dogImages.length) { currentImage = 1 }
  if (n < 1) { currentImage = dogImages.length }
  for (i = 0; i < dogImages.length; i++) {
    console.log(dogImages[i].clientHeight);
    dogImages[i].style.opacity = "0";
  }

  for (i = 0; i < selectorButtons.length; i++) {
    selectorButtons[i].className = selectorButtons[i].className.replace(" selected", "");
  }

  dogImages[currentImage - 1].style.opacity = "1";
  // selectorButtons[currentImage - 1].className += " selected"
  slideshow = setInterval("changeSlides(1)", 10000);
}
