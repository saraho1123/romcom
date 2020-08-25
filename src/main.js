// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('onload' displayCover)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayCover() {
  getRandomCovers();
  // see a cover with a randomly selected image and taglin with 2 random discriptors
  // loop through array of cover images using getRandomIndex(covers) function
  // repeat that for title and 2 discriptors
}

function getRandomCovers() {
  getRandomIndex(covers);
}

function getRandomTitle() {
  getRandomIndex(titles);
}

function getRandomDescriptors() {
  var descript1 = getRandomIndex(descriptors);
  var descript2 = getRandomIndex(descriptors);

}
