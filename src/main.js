// Create variables targetting the relevant DOM elements here 👇


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = randomizeBookCover();

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var coverTagLine1 = document.querySelector(".tagline-1");
var coverTagLine2 = document.querySelector(".tagline-2");


// Add your event listeners here 👇
window.onLoad = displayCover(currentCover)

// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayCover() {
  coverImage.src = currentCover.cover;
  // We need to look at this line 28!!
}
function randomizeBookCover() {
  var bookCover = new Cover(
    coverImage[getRandomIndex(covers)],
    coverTitle[getRandomIndex(titles)],
    coverTagLine1[getRandomIndex(descriptors)],
    coverTagLine2[getRandomIndex(descriptors)],
  )
  return bookCover;
  // IF STATEMENT for coverTagLine1 === coverTagLine2 THEN rerun coverTagLine2[getRandomIndex(descriptors)];
}
