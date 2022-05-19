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

function loadMultipleImages([imageNames]) {}

function viewAlbum(albumName) {
  const albumKey = encodeURIComponent(albumName) + "/";
  s3.listObjects({ Prefix: albumKey }, function (err, data) {
    if (err) {
      return alert("There was an error viewing your album: " + err.message);
    }
    // 'this' references the AWS.Request instance that represents the response
    const href = this.request.httpRequest.endpoint.href;
    const bucketUrl = href + albumBucketName + "/";
    const photos = data.Contents.map(function (photo) {
      const photoKey = photo.Key;
      const imageURL = bucketUrl + encodeURIComponent(photoKey);
      return '<img class="dogImage" src="' + imageURL + '"/>';
    });
    console.log(photos.join("\n"));
    document.getElementById("allPhotos").innerHTML = photos.join("\n");
  });
}

// Nikita / Natasha: Access array of photo objects (data.Contents).
function getAlbumObjectArray(albumName) {
  const albumKey = encodeURIComponent(albumName) + "/";
  s3.listObjects({ Prefix: albumKey }, function (err, data) {
    if (err) {
      return alert("There was an error viewing your album: " + err.message);
    }
    return data.Contents;
  });
}
