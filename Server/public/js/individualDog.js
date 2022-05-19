const btnShowHideDetail = document.getElementById("hideShowButton");
const extraDetails = document.querySelectorAll(".extraDetail");

// Get dog name from DB.

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
  window.location = "http://localhost:3000/adopt";
}

// btnShowHideDetail.addEventListener("click", detailsButtonHandler);
