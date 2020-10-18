

//
//
// please describe whatever is happeing in here: functions/arrays/objects.. etc
//
const picArray = [
  {
    name: "Alex Rapp - Let me Go",
    location: "Berlin",
    year: "2020",
    picture: "Alex-2.png",
    page: "alex-innermovie.html",
  },
  {
    name: "King Midas Sound - Zeros",
    location: "Berlin",
    year: "2020",
    picture: "KingMidasSound.jpg",
    page: "kingmidas-innermovie.html",
  },
  {
    name: "Local Suicide - Already There",
    location: "Berlin",
    year: "2020",
    picture: "already.jpg",
    page: "localsuicide-innermovie.html",
  },
  {
    name: "Kazu Makino Live in Berlin",
    location: "Berlin",
    year: "2020",
    picture: "KazuMakino.png",
    page: "kazu-innermovie.html",
  },
  {
    name: "Threshold Magazine x Atonal",
    location: "Berlin",
    year: "2020",
    picture: "Atonal3.jpg",
    page: "Atonal-innermovie.html",
  },
  {
    name: "Studio Obectra",
    location: "Berlin",
    year: "2020",
    picture: "Obectra.png",
    page: "Studio_Obectra-innermovie.html",
  },
  {
    name: "Live-Editing Showreel",
    location: "Berlin",
    year: "2020",
    picture: "content/pictures/KingMidasSound.jpg",
    page: "Live-Editing-innermovie.html",
  },
  {
    name: "Fiction Showreel",
    location: "Berlin",
    year: "2020",
    picture: "content/pictures/pic1.png",
    page: "Fiction-innermovie.html",
  },
];

// function that gets ptoject details and builds a gallery item

function createGalleryElement(movieName, location, year, imageUrl, pageUrl) {
  const galLink = document.createElement("a");
  galLink.classList.add("galLink");
  galLink.href = pageUrl;

  const workGal = document.createElement("div");
  workGal.classList.add("workGal");
  workGal.setAttribute("id", movieName);
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

  textInfo.appendChild(movieHeadline);
  textInfo.appendChild(movieText);

  const workContainer = document.querySelector(".workContainer");
  workContainer.appendChild(galLink);
}

// function that gets an object of all the projects and biulds a gallery item for every one

function buildGallery(array) {
  for (let i = 0; i < picArray.length; i++) {
    createGalleryElement(
      array[i].name,
      array[i].location,
      array[i].year,
      array[i].picture,
      array[i].page
    );

    //  hovers in gallery -
    const movieHover = document.querySelectorAll(".workGal");
    movieHover[i].addEventListener("mouseenter", function (event) {
      const descriptionHover = movieHover[i].querySelector(".descriptionHover");
      console.log(descriptionHover);
      descriptionHover.classList.add("descriptionHoverAnimation");
    });
    movieHover[i].addEventListener("mouseleave", function (event) {
      const descriptionHover = movieHover[i].querySelector("descriptionHover");
      descriptionHover.classList.remove(".descriptionHoverAnimation");
      console.log(descriptionHover);
    });
  }
}

// gallery build
buildGallery(picArray);

// // hovers in gallery ---- not finished
// const movieHover = document.querySelectorAll(".workGal");
// movieHover[0].addEventListener("mouseenter", function(event) {
//   const descriptionHover = movieHover[0].querySelector(".descriptionHover");
//   descriptionHover.style.color = "#F9F9F9";

// });
// movieHover[0].addEventListener("mouseleave", function(event) {
//   const descriptionHover = movieHover[0].querySelector(".descriptionHover");
//   descriptionHover.style.color = "transparent";
// })

// up button in gallery

const upbutton = document.querySelector(".upbutton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    upbutton.style.display = "block";
  } else {
    upbutton.style.display = "none";
  }
}

upbutton.addEventListener("click", topFunction);

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//
//
//
//
// navBar scripts:
//
//
//
//


//
//

/* InnerMovie - Slider */

let slide_index = 1; //start on 1.
displaySlides(slide_index); //
function nextSlide(n) {
  displaySlides((slide_index += n));
}
function currentSlide(n) {
  displaySlides((slide_index = n));
}
function displaySlides(n) {
  let i;
  let slides = document.getElementsByClassName("showSlide");
  if (n > slides.length) {
    slide_index = 1;
  }
  if (n < 1) {
    slide_index = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slide_index - 1].style.display = "block";
  console.log(slides[slide_index - 1].style.display);
}
