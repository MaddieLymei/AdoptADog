const dogImages = document.getElementsByClassName("dog-image");
const sliderButtons = document.getElementsByClassName("slider-left");
let currentImage = 1;

window.onload = () => {
  const btnShowHideDetail = document.getElementById("hideShowButton");
  const extraDetails = document.querySelectorAll(".extraDetail");
  const btnAdopt = document.getElementsByClassName("adoptButton")[0];

  // Get dog name from DB.
  // console.log("How do I take {dog_name} home?".replace("{dog_name}", "Jimbo"));

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

  function adoptionClick() {
    window.location = 'http://localhost:3000/adopt';
  }

  btnShowHideDetail.addEventListener("click", detailsButtonHandler);
  btnAdopt.addEventListener("click", adoptionClick);

  addBorder();

  window.addEventListener("resize", addBorder);

  function addBorder() {
    if (dogImages.length != 1) {
      for (i = 0; i < dogImages.length; i++) {
        dogImages[i].style.borderTop = "";
        dogImages[i].style.borderBottom = "";
      }

      let largestHeight = dogImages[0].offsetHeight;
      for (a = 0; a < dogImages.length; a++) {
        if (dogImages[a].offsetHeight > largestHeight) {
          largestHeight = dogImages[a].offsetHeight;
        }
      }

      for (f = 0; f < dogImages.length; f++) {
        var diff = Math.abs(largestHeight - dogImages[f].offsetHeight);
        if (diff > 20 && dogImages[f].offsetHeight != 0) {
          border = (largestHeight - dogImages[f].offsetHeight) / 2;
          console.log("largest:" + largestHeight);
          console.log("height:" + dogImages[f].offsetHeight)
          console.log("border:" + border);
          dogImages[f].style.borderTop = border + 'px solid rgba(255, 255, 255,0.8)';
          dogImages[f].style.borderBottom = border + 'px solid rgba(255, 255, 255,0.8)';
        }
      }
    }
    else {
      sliderButtons[0].remove();
      sliderButtons[0].remove();
    }

  };
}

slideshow = setInterval("changeSlides(1)", 10000);
selectSlides(currentImage);


function selectSlides(n) {
  display(currentImage = n);
}

function changeSlides(n) {
  display(currentImage += n);
}

function display(n) {
  clearInterval(slideshow);
  let i;

  if (n > dogImages.length) { currentImage = 1 }
  if (n < 1) { currentImage = dogImages.length }
  for (i = 0; i < dogImages.length; i++) {
    dogImages[i].style.opacity = "0";
  }

  dogImages[currentImage - 1].style.opacity = "1";
  slideshow = setInterval("changeSlides(1)", 10000);
}