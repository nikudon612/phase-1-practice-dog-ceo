console.log("%c HI", "color: firebrick");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";
let globalBreeds;
let globalDogImages;

// Make call, get the images at dog.ceo
// fetch

document.addEventListener("DOMContentLoaded", () => {
  // do stuff
  // dogImages =
  //     {message: Array(4), status: 'success'}

  // {
  //     message: ['n02115641_1969.jpg',
  //              'n02095314_1704.jpg',
  //              'n02088094_4759.jpg',
  //              'n02109525_12392.jpg']
  //     status: "success"
  // }
  fetch(imgUrl)
    .then((resp) => resp.json())
    .then((dogImages) => getImages(dogImages));
  //dogBreeds =
  //{
  //.message :{
  //     "breedType": ["boston", "english", "french"]
  // }
  //   "status": "success"
  //}
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then((dogBreeds) => getBreeds(dogBreeds));
});

//Challenge 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getBreeds(dogBreeds) {
  // dogBreeds.message.forEach(element => console.log(element))

  // put breeds into ul
  for (objKey in dogBreeds.message) {
    console.log(objKey);

=    //create new element
    let newElement = document.createElement("li");
    newElement.innerText = objKey;

    //add all breeds to the <ul>
    const dogBreedsUL = document.querySelector("#dog-breeds");

    //append to li
    dogBreedsUL.append(newElement);
  }
  changeColor();
}

//Challenge 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getImages(dogImages) {
  const images = dogImages.message;
  images.forEach((element) => renderImage(element));
}

// param: url - String
// assign url to src of a new img element
function renderImage(url) {
  const img = document.createElement("img");
  img.src = url;
  // select container where we want to put these images
  const dogImageContainer = document.querySelector("#dog-image-container");

  // append image to container
  dogImageContainer.append(img);
}

// Challenge 3 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function changeColor() {
  //for each li
  //add event listener to each one
  //... to change its style to ... font color
  let listItemsArray = document.getElementsByTagName("li");
  for (const el of listItemsArray) {
    el.addEventListener("click", (Event) => {
      Event.target.style.color = "red";
    });
  }
}
