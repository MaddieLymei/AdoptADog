
function redirectToAdopt(){
    window.location = 'http://localhost:3000/dog/1';
}
//add Individual dog page file path here

function filter() {
    window.location = "http://localhost:3000/adopt";
}

function getBreeds() {
    axios({
        method: "GET",
        url: "http://localhost:3000/dogs/breed"
    }).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    });
}