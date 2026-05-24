


const images = [
  {
    image: "images/lake-tana.jpg",
    alt: "Lake Tana",
    caption: "A couple riding a traditional boat on Lake Tana"
  },
  {
    image: "images/coffee-ceremony.webp",
    alt: "Coffee ceremony",
    caption: "Visitors enjoining a traditional Ethiopian coffee ceremony"
  },
  {
    image: "images/danakil.jpg",
    alt: "Danakil Depression",
    caption: "A visitor exploring the Danakil Depression"
  },
  {
    image: "images/hamer-tradition.webp",
    alt: "Hamer tradition",
    caption: "The Hamer bull-jumping ceremony"
  },
  {
    image: "images/gondar-castle.jpg",
    alt: "Fasil Ghebbi, Gondar",
    caption: "The historic castles of Gondar"
  },
  {
    image: "images/hamer-girl.jpg",
    alt: "Hamer girl",
    caption: "A young woman from the Hamer tribe"
  },
  {
    image: "images/afar-desert.jpg",
    alt: "Afar desert Caravan",
    caption: "Camels following their guide in the Afar desert"
  },
  {
    image: "images/lalibela-church.webp",
    alt: "Church of St.George, Lalibela",
    caption: "The church of St.George in Lalibela"
  },
  {
    image: "images/markato.jpg",
    alt: "Merkato, Addis Abeba",
    caption: "Daily life in Merkato, Addis Abeba"
  },
  {
    image: "images/raw-beef-meal.webp",
    alt: "Traditional raw beef dish",
    caption: "A traditional Ethiopian raw beef dish"
  },
  {
    image: "images/traditional-meal.webp",
    alt: "Ethiopian traditional meal",
    caption: "A traditional Ethiopian meal served with injera"
  }
];

const activeImage = document.querySelector(".active-image");
const activeImageCaption = document.querySelector(".active-image-desc");
const thumbnailsList = document.querySelectorAll(".thumbnails-list");

let currentImageIndex = 0;

document.addEventListener("DOMContentLoaded", initApp);

function renderActiveImage() {
  const img = images[currentImageIndex];

  activeImage.classList.add("fade-out");

  setTimeout(() => {

    activeImage.src = images[currentImageIndex].image;
    activeImage.alt = images[currentImageIndex].alt;
    activeImageCaption.textContent = images[currentImageIndex].caption;

    activeImage.classList.remove("fade-out");
  }, 300);
  
}

const thumbnails = [];

function renderThumbnails() {

  thumbnailsList.forEach(ul => {


      images.forEach((image, index) => {

        const li = document.createElement("li");
        li.className = "thumbnails-list__item";

        const button = document.createElement("button");
        button.type = "button";
        button.dataset.index = index;

        const img = document.createElement("img");

        img.src = image.image;
        img.alt = image.alt;

        button.appendChild(img);

        li.appendChild(button);

        ul.appendChild(li);

        thumbnails.push(button);

        button.addEventListener("click", () => {
        currentImageIndex = index;
        renderActiveImage();
        updateActiveThumbnail();

            });
     });
  });
}


function updateActiveThumbnail() {

  // btns.forEach((btn) => {
  //   btn.classList.remove("is-image-active");
  // });

  // btns.forEach(btn => {
  //   if(Number(btn.dataset.index) === currentImageIndex) {
  //     btn.classList.add("is-image-active");
  //   }
  // });

  thumbnails.forEach(btn => {
    const isActive = Number(btn.dataset.index) === currentImageIndex;

    btn.classList.toggle("is-image-active", isActive);
  });
}

function preloadImages() {
  images.forEach(item => {
    const img = new Image();
    img.src = item.image;
  });
}

function initApp() {
  preloadImages();
  renderThumbnails();
  renderActiveImage();
  updateActiveThumbnail();
}


const wrapper = document.querySelector(".thumbnails-list-wrapper");

wrapper.addEventListener("touchstart", () => {
  wrapper.classList.add("is-paused");
});

wrapper.addEventListener("touchstart", () => {
  wrapper.classList.remove("is-paused");
});

wrapper.addEventListener("touchcancel", () => {
  wrapper.classList.remove("is-paused");
});








