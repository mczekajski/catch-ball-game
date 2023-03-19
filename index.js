import Canvas from "./Canvas.js";
const { fromEvent } = rxjs;

const game = document.getElementsByClassName("game");

// const canvas = new Canvas("canvas");

const click$ = fromEvent(game, "click");
// const windowResize$ = fromEvent(window, "resize");

click$.subscribe((event) => {
  console.log(`Clicked at ${event.clientX} ${event.clientY}`);
});

// windowResize$.subscribe(() => {
//   canvas.setCanvasDimensions();
//   canvas.paint();
// });
