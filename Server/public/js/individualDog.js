const btnShowHideDetail = document.getElementById("hideShowButton");
const extraDetails = document.querySelectorAll(".extraDetail");
const btnAdopt = document.getElementsByClassName("adoptButton")[0];

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
  window.location = "http://ec2-52-73-84-167.compute-1.amazonaws.com/adopt";
}

btnShowHideDetail.addEventListener("click", detailsButtonHandler);
btnAdopt.addEventListener("click", adoptionClick);

const dogImages = document.getElementsByClassName("dog-image");
const sliderButtons = document.getElementsByClassName("slider-left");
let currentImage = 1;

window.onload = addBorder;

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
        dogImages[f].style.borderTop =
          border + "px solid rgba(255, 255, 255,0.8)";
        dogImages[f].style.borderBottom =
          border + "px solid rgba(255, 255, 255,0.8)";
      }
    }
  } else {
    sliderButtons[0].remove();
    sliderButtons[0].remove();
  }
}

slideshow = setInterval("changeSlides(1)", 10000);
selectSlides(currentImage);

function selectSlides(n) {
  display((currentImage = n));
}

function changeSlides(n) {
  display((currentImage += n));
}

function display(n) {
  clearInterval(slideshow);
  let i;

  if (n > dogImages.length) {
    currentImage = 1;
  }
  if (n < 1) {
    currentImage = dogImages.length;
  }
  for (i = 0; i < dogImages.length; i++) {
    dogImages[i].style.opacity = "0";
  }

  dogImages[currentImage - 1].style.opacity = "1";
  slideshow = setInterval("changeSlides(1)", 10000);
}

const albumBucketName = "adopt-a-dog-2022";



// Initialize the Amazon Cognito credentials provider

AWS.config.region = "us-east-1"; // Region

AWS.config.credentials = new AWS.CognitoIdentityCredentials({

  IdentityPoolId: "us-east-1:3a4bd30f-7c5f-4d0f-a8bd-7937949e4715",

});



// Create a new service object

const s3 = new AWS.S3({

  apiVersion: "2006-03-01",

  params: { Bucket: albumBucketName },

});

// 'images' is our albumName in S3 currently

function loadImage(albumName, imageName) {

  const albumKey = encodeURIComponent(albumName) + "/";

  s3.listObjects({ Prefix: albumKey }, function (err) {

    if (err) {

      return alert("There was an error viewing your album: " + err.message);

    }

    const href = this.request.httpRequest.endpoint.href;

    const bucketUrl = href + albumBucketName + "/";

    const photoKey = `${albumName}/${imageName}`;

    console.log("key in load image:", photoKey);

    const imageURL = bucketUrl + encodeURIComponent(photoKey);

    console.log(`'${imageURL}'`);

    // Change image name below to microchip ID

    document.getElementById(`${imageName}`).innerHTML =

      '<img class="dogImage" src="' + imageURL + '"/>';

  });

}

function returnImageURL(albumName, imageName) {

  const albumKey = encodeURIComponent(albumName) + "/";

  s3.listObjects({ Prefix: albumKey }, function (err) {

    if (err) {

      return alert("There was an error viewing your album: " + err.message);

    }

    const href = this.request.httpRequest.endpoint.href;

    const bucketUrl = href + albumBucketName + "/";

    const photoKey = `${albumName}/${imageName}`;

    const imageURL = bucketUrl + encodeURIComponent(photoKey);

    console.log(`'${imageURL}'`);

    return imageURL;

  });

}