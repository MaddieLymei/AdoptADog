function redirectToAdopt() {
  window.location = 'http://localhost:3000/dog/1';
}
//add Individual dog page file path here

function filter() {
  window.location = "http://localhost:3000/adopt";
}

window.onload = function () {
  axios({
    method: "GET",
    url: "/dogs/breed"
  }).then((res) => {
    populateSelectBreed(res.data);
  }).catch((err) => {
    console.log(err)
  });
}

function redirectToAdopt() {
  window.location = 'http://localhost:3000/dog/1';
}
//add Individual dog page file path here

function populateSelectBreed(data) {
  selectBreeds = document.getElementById("breedDropdown");
  for (a = 0; a < data.length; a++) {
    op = new Option(data[a].Breed_Name, a);
    selectBreeds.appendChild(op)
  }
}

function changeToBreed() {
  const breedResult = getElementById("breedDropdown").value;
  console.log(res);
  if (breedResult != "") {
    axios({
      method: "GET",
      url: "/dogs/" + breedResult
    }).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err)
    });
  }
}