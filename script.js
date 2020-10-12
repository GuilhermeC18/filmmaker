//BURGER MENU
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

//GALLERY

const picArray = [
  {
    name: "Project one",
    location: "Berlin",
    year: "2020",
    picture: "content/pictures/AlexRapp.png",
  },
  {
    name: "Project two",
    location: "Berlin",
    year: "2020",
    picture: "content/pictures/KazuMakino.png",
  },
  {
    name: "Project something",
    location: "Berlin",
    year: "2020",
    picture: "content/pictures/promo.jpg",
  },
  {
    name: "Project lebil",
    location: "Berlin",
    year: "2020",
    picture: "content/pictures/pic1.png",
  },
  {
    name: "Project another something",
    location: "Berlin",
    year: "2020",
    picture: "content/pictures/Alex-2.png",
  },
  {
    name: "Project one",
    location: "Berlin",
    year: "2020",
    picture: "content/pictures/Atonal.jpg",
  },
  {
    name: "Project one",
    location: "Berlin",
    year: "2020",
    picture: "content/pictures/KingMidasSound.jpg",
  },
  {
    name: "Project one",
    location: "Berlin",
    year: "2020",
    picture: "content/pictures/LocalSuicide-AlreadyThere.jpg",
  },
];

function createGalleryElement(movieName, location, year, imageUrl) {
  const galLink = document.createElement("a");
  galLink.classList.add("galLink");
  // console.log(galLink);

  const workGal = document.createElement("div");
  workGal.classList.add("workGal");
  workGal.setAttribute("id", movieName);
  //console.log(workGal);
  galLink.appendChild(workGal);

  workGal.style.backgroundImage = `url(${imageUrl})`;

  const textInfo = document.createElement("div");
  textInfo.classList.add("textInfo");
  workGal.appendChild(textInfo);

  const movieHeadline = document.createElement("h3");
  movieHeadline.innerHTML = movieName;
  const movieText = document.createElement("p");
  movieText.innerHTML = location + " - " + year;
  movieText.classList.add("descriptionHover");
  console.log(movieText);
  console.log(movieHeadline);

  console.log(textInfo);
  textInfo.appendChild(movieHeadline);
  textInfo.appendChild(movieText);

  const workContainer = document.querySelector(".workContainer");
  // console.log(workContainer);
  workContainer.appendChild(galLink);
}

function buildGallery(array) {
  for (let i = 0; i < picArray.length; i++) {
    createGalleryElement(
      array[i].name,
      array[i].location,
      array[i].year,
      array[i].picture
    );
  }
}

buildGallery(picArray);

//createGalleryElement("lebil", "Berlin", "2020", "content/pictures/promo.jpg");
