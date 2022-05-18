window.onload = () => {
  const closeSlideoutButton = document.getElementById("closeSlideoutButton");
  const closeModalButtonFailure = document.getElementById("closeModalButtonFailure");
  const closeModalButtonSuccess = document.getElementById("closeModalButtonSuccess");
  const slideout = document.getElementById("slideoutID");
  const successModal = document.getElementById("successModal");
  const failureModal = document.getElementById("failureModal");
  const contactMeButton = document.getElementById("contactMeButton");
  const openSlideoutButton = document.getElementById("openSlideoutButton");
  const adoptForm = document.getElementsByClassName("adoptionForm")[0];

  openSlideoutButton.addEventListener("click", openSlideout);

  closeSlideoutButton.addEventListener("click", closeSlideout);
  closeModalButtonFailure.addEventListener("click", closeModalFailure);
  closeModalButtonSuccess.addEventListener("click", closeModalSuccess);

  // const success = true;
  const success = true;
  adoptForm.addEventListener("submit", (e) => openModal(e, success));

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

  function closeModalFailure() {
    failureModal.style.display = "none";
  }

  function closeModalSuccess() {
    successModal.style.display = "none";
  }
};

// Add cross to failure modal
// add event listener for cross
// &times;

// TODO: try catch error handling  for success or failure modals

// TODO: button hover EVERYWHERE

// TODO: instead of "Contact me" use "Apply" for form button.
