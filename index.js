let descriptionElement = document.querySelector(".about .description");
let titleElement = document.querySelector(".about .title");
// let figureElement = document.querySelectorAll(".services figure");

window.addEventListener("mousemove", handleMouseMove);
function handleMouseMove(event) {
  descriptionElement.style.flexBasis = event.clientX + "px";
  //   titleElement.style.flexBasis = event.clientX + "px";
}
