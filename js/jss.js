const photoChohyeonwoo = document.querySelector(".photo-chohyeonwoo");
const upperMenu = document.querySelector(".upper-menu");
const home = document.querySelector("#home");
const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const career = document.querySelector("#career");

function onHomeClick() {
  career.classList.add("hidden");
  photoChohyeonwoo.classList.remove("hidden");
}

home.addEventListener("click", onHomeClick);

function onAboutClick() {
  console.log("clicked");
  career.classList.remove("hidden");
}

about.addEventListener("click", onAboutClick);
