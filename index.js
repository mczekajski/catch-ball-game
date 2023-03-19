import Canvas from "./Canvas.js";
const { fromEvent } = rxjs;

const game = document.querySelector("#game");
const paw = document.querySelector("#paw");

// const canvas = new Canvas("canvas");

const click$ = fromEvent(game, "click");
const mouseDown$ = fromEvent(game, "mousedown");
const mouseUp$ = fromEvent(game, "mouseup");
const mouseMove$ = fromEvent(game, "mousemove");

click$.subscribe((event) => {
  console.log(`Clicked at ${event.clientX} ${event.clientY}`);
});

mouseMove$.subscribe((e) => {
  let x = e.clientX;
  let y = e.clientY;

  paw.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
});

mouseDown$.subscribe((e) => {
  paw.src = paw.src.replace("paw1", "paw2");
  console.log(paw.src);
});

mouseUp$.subscribe((e) => {
  paw.src = paw.src.replace("paw2", "paw1");
});

// windowResize$.subscribe(() => {
//   canvas.setCanvasDimensions();
//   canvas.paint();
// });
