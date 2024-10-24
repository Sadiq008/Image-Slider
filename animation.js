const title = document.querySelector(".title");
const whiteLine = document.querySelector(".whiteline_top");
const h2 = document.querySelector("h2");
const hr = document.querySelector("hr");
const container = document.querySelector(".container");

window.addEventListener("load", revealAnim);

function revealAnim() {
  const TLFADE = gsap.timeline();

  TLFADE.from(title, { autoAlpha: 0, y: -50, delay: 1 })
    .to(whiteLine, {
      height: "10rem",
      borderRadius: "10px",
      border: "1px solid white",
      delay: 0.2,
    })
    .from(h2, { autoAlpha: 0, y: -50, delay: 1 })
    .to(hr, {
      display: "flex",
      width: "40%",
      color: "white",
    })
    .from(container, {
      autoAlpha: 0,
      y: -50,
      delay: 1,
    });
}
