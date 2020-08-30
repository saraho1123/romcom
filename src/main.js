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
var showRandomButton = document.querySelector(".random-cover-button");
var homeButton = document.querySelector(".home-button");
var makeYourCoverButton = document.querySelector(".make-new-button");
var viewCoversButton = document.querySelector(".view-saved-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var myBookButton = document.querySelector(".create-new-book-button");
var userCoverInput = document.querySelector(".user-cover");
var userTitleInput = document.querySelector(".user-title");
var userDescriptionInput1 = document.querySelector(".user-desc1");
var userDescriptionInput2 = document.querySelector(".user-desc2");
var formView = document.querySelector(".form-view");
var homeView = document.querySelector(".home-view");
var savedCoversView = document.querySelector(".saved-view");
var savedCoversGrid = document.querySelector(".saved-covers-section");

// Add your event listeners here 👇
window.onLoad = displayRandomOnLoad();
showRandomButton.addEventListener("click", displayRandomButton);
makeYourCoverButton.addEventListener("click", displayViewForm);
homeButton.addEventListener("click", displayHomeView);
viewCoversButton.addEventListener("click", displaySavedCovers);
myBookButton.addEventListener("click", displayUserCover);
saveCoverButton.addEventListener("click", saveCovers)

// Create your event handlers and other functions here 👇

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function displayCover(bookCoverObj) {
  coverImage.src = bookCoverObj.cover;
  coverTitle.innerText = bookCoverObj.title;
  coverTagLine1.innerText = bookCoverObj.tagline1;
  coverTagLine2.innerText = bookCoverObj.tagline2;

}

function randomizeBookCover() {
  var bookCover = new Cover(
    covers[getRandomIndex(covers)],
    titles[getRandomIndex(titles)],
    descriptors[getRandomIndex(descriptors)],
    descriptors[getRandomIndex(descriptors)],
  )
  return bookCover;
}

function displayRandomOnLoad() {
  var random = randomizeBookCover();
  currentCover = random;
  displayCover(random);

}

function displayRandomButton() {
  var buttonRandom = randomizeBookCover();
  currentCover = buttonRandom;
  displayCover(buttonRandom);

}

function displayViewForm() {
  formView.classList.remove("hidden");
  homeView.classList.add("hidden");
  savedCoversView.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  showRandomButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}

function displayHomeView() {
  formView.classList.add("hidden");
  homeView.classList.remove("hidden");
  showRandomButton.classList.remove("hidden");
  saveCoverButton.classList.remove("hidden");
  homeButton.classList.add("hidden");
}

function displaySavedCovers() {
  savedCoversView.classList.remove("hidden");
  homeView.classList.add("hidden");
  showRandomButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeButton.classList.remove("hidden");
}

function displayUserCover() {
  event.preventDefault();
  var userCover = getUserInput();
  currentCover = userCover;
  displayCover(userCover);
  displayHomeView();
}

function pushUserInputToArray() {
  covers.push(userCoverInput.value);
  titles.push(userTitleInput.value);
  descriptors.push(userDescriptionInput1 .value);
  descriptors.push(userDescriptionInput2.value);
}

function getUserInput() {
  var userBookCover = new Cover (
    userCoverInput.value,
    userTitleInput.value,
    userDescriptionInput1.value,
    userDescriptionInput2.value,
  )
  return userBookCover;
  displayCover(userBookCover);
}

function saveCovers() {
  var savedCoversBox = savedCoversGrid.innerHTML
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
    formatSavedCovers();

    console.log(savedCovers);
  }
}

function formatSavedCovers() {
  var miniCover =
  `
  <div class="mini-cover">
    <img class="mini-cover" src="${currentCover.cover}">
    <h2 class="cover-title cover-title::first-letter"> ${currentCover.title}</h2>
    <h3 class="tagline">A tale of ${currentCover.tagline1} and ${currentCover.tagline2}</h3>
  </div>
  `
  savedCoversGrid.insertAdjacentHTML("afterbegin", miniCover);
}
