// @ts-nocheck

import * as rxjs from "rxjs";
import "./index.css";

const game = document.querySelector("#game");
const paw = document.querySelector("#paw");
const ball = document.querySelector("#ball");

const click$ = rxjs.fromEvent(game, "click");
const mouseDown$ = rxjs.fromEvent(game, "mousedown");
const mouseUp$ = rxjs.fromEvent(game, "mouseup");
const mouseMove$ = rxjs.fromEvent(game, "mousemove");

function isBallCaught(x, y) {
  const ballRect = ball.getBoundingClientRect();

  return (
    x > ballRect.x &&
    x < ballRect.x + ballRect.width &&
    y > ballRect.y &&
    y < ballRect.y + ballRect.height
  );
}

click$.subscribe((event) => {
  if (isBallCaught(event.clientX, event.clientY)) {
    console.log("ball caught!");
  } else {
    console.log("oops...");
  }
});

mouseMove$.subscribe((e) => {
  let x = e.clientX;
  let y = e.clientY;

  paw.style.transform = `translate(${x - 25}px, ${y - 25}px)`;
});

mouseDown$.subscribe((e) => {
  e.preventDefault();
  paw.src = paw.src.replace("paw1", "paw2");
});

mouseUp$.subscribe((e) => {
  paw.src = paw.src.replace("paw2", "paw1");
});
