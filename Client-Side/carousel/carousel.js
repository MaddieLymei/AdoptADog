const dogImages = document.getElementsByClassName("dog-image");
let currentImage = 1;
selectSlides(currentImage);

window.onload = function () {
  for (i = 0; i < selectorButtons.length; i++) {
    dogImages[i].className += " fade";
  }
}

function selectSlides(n) {
  display(currentImage = n);
}

function changeSlides(n) {
  display(currentImage += n);
}

function display(n) {
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