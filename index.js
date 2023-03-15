import Canvas from "./Canvas.js";

const { fromEvent } = rxjs;

const canvas = new Canvas("canvas");
const click$ = fromEvent(canvas.HTMLElement, "click");

click$.subscribe((event) => {
  console.log(`Clicked at ${event.clientX} ${event.clientY}`);
});

canvas.paint();

window.addEventListener("resize", () => {
  canvas.setCanvasDimensions();
  canvas.paint();
});
