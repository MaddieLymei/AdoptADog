const btnShowHideDetail = document.getElementById("hideShowButton");
const extraDetails = document.querySelectorAll(".extraDetail");

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

btnShowHideDetail.addEventListener("click", detailsButtonHandler);
