const openSlideoutButton = document.getElementById("openSlideoutButton");
const closeSlideoutButton = document.getElementById("closeSlideoutButton");
const slideout = document.getElementById("slideoutID");
const successModal = document.getElementById("successModal");
const failureModal = document.getElementById("failureModal");
const contactMeButton = document.getElementById("contactMeButton");

const telPattern = (pattern = "[0-9]{3}-[0-9]{2}-[0-9]{3}");
function validateForm() {}

function openSlideout(e) {
  e.preventDefault();
  slideout.style.borderLeft = "1px solid #056d68";
  if (screen.width > 768) {
    slideout.style.width = "400px";
  } else if (screen.width <= 768 && screen.width > 500) {
    slideout.style.width = "350px";
  } else slideout.style.width = "100%";
}

function closeSlideout(e) {
  e.preventDefault();
  slideout.style.width = "0";
  slideout.style.borderLeft = "none";
}

function openModal(e, success) {
  e.preventDefault();
  if (success) {
    successModal.style.display = "block";
  } else {
    failureModal.style.display = "block";
  }
}

openSlideoutButton.addEventListener("click", openSlideout);
closeSlideoutButton.addEventListener("click", closeSlideout);

const success = true;
// const success = false;
contactMeButton.addEventListener("click", (e) => openModal(e, success));
