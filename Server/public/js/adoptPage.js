function redirectToAdopt() {
  window.location = 'http://localhost:3000/dog/1';
}
//add Individual dog page file path here

function filter() {
  window.location = "http://localhost:3000/adopt";
}

// window.onload = function () {
//   axios({
//     method: "GET",
//     url: "/dogs/breed"
//   }).then((res) => {
//     populateSelectBreed(res.data);
//   }).catch((err) => {
//     console.log(err)
//   });
// }

function redirectToAdopt() {
  window.location = 'http://localhost:3000/dog/1';
}
//add Individual dog page file path here

// function populateSelectBreed(data) {
//   selectBreeds = document.getElementById("breedDropdown");
//   for (a = 0; a < data.length; a++) {
//     op = new Option(data[a].Breed_Name, a);
//     selectBreeds.appendChild(op)
//   }
// }

function getData (url, method){
  axios({
    method: url,
    url: method
  }).then((res) => {
    console.log(res.data)
  }).catch((err) => {
    console.log(err)
  });
}

function createRowCards() {
  let dogInfo = [];
  let data = getData("/dogs/display", "GET");
  

  console.log(data);
  // const dogs = document.getElementById("rowCategories");

  
  // dogs.innerHTML += 
  //   `</script>
  //   <section class="rowCards">
  //     <section class="columnCards">
  //       <section class="card">
  //         <img src="/images/Jimbo.jpg" alt="Jimbo" style="width:100%">
  //         <section class="dogInfo">
  //           <h3 for="dogName">Jimbo</h3>
  //           <p>Labrador, <br> 12 years old</p>
  //           <button type="button" class="moreAboutDog" onclick="redirectToAdopt()">→ Find out more about me</button>
  //         </section>
  //       </section>
  //     </section>`;

  // const toggleMenu = document.getElementById("toggleMenu");
  // const navbarList = document.getElementById("navbarList");

  // toggleMenu.addEventListener("click", () => {
  //   navbarList.classList.toggle("active");
  // });
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