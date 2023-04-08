import * as rxjs from "rxjs";
import "./index.scss";

const game = document.querySelector("#game") as HTMLDivElement;
const paw = document.querySelector("#paw") as HTMLImageElement;
const ball = document.querySelector("#ball") as HTMLImageElement;

const click$ = rxjs.fromEvent(game, "click");
const mouseDown$ = rxjs.fromEvent(game, "mousedown");
const mouseUp$ = rxjs.fromEvent(game, "mouseup");
const mouseMove$ = rxjs.fromEvent(game, "mousemove");

interface IPoint {
  x: number;
  y: number;
}

moveBallToPoint(generateRandomPoint());

function isBallCaught(x: number, y: number) {
  const ballRect = ball.getBoundingClientRect();

  return (
    x > ballRect.x &&
    x < ballRect.x + ballRect.width &&
    y > ballRect.y &&
    y < ballRect.y + ballRect.height
  );
}

function generateRandomPoint(): IPoint {
  const xRange = window.innerWidth - 80;
  const yRange = window.innerHeight - 80;
  return {
    x: Math.floor(Math.random() * xRange),
    y: Math.floor(Math.random() * yRange),
  };
}

function moveBallToPoint(point: IPoint) {
  ball.style.transform = `translate(${point.x}px, ${point.y}px)`;
}

click$.subscribe((e: Event) => {
  const mouseEvent = e as MouseEvent;
  if (isBallCaught(mouseEvent.clientX, mouseEvent.clientY)) {
    console.log("ball caught!");
    moveBallToPoint(generateRandomPoint());
  } else {
    console.log("oops...");
  }
});

mouseMove$.subscribe((e: Event) => {
  const mouseEvent = e as MouseEvent;
  let x = mouseEvent.clientX;
  let y = mouseEvent.clientY;

  paw.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
});

mouseDown$.subscribe((e) => {
  e.preventDefault();
  paw.src = paw.src.replace("paw1", "paw2");
});

mouseUp$.subscribe((e) => {
  paw.src = paw.src.replace("paw2", "paw1");
});
