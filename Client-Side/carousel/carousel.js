const btnRight = document.getElementById("right-slider");
const btnLeft = document.getElementById("left-slider");
const dogImages = document.getElementById(["img-container"]);

let currentImage = 0;

btnRight.addEventListener('click', moveImage);
function moveImage() {
  currentImage += 1;
  dogImages.style.transform = `translateX(${currentImage * -100}%)`;
}