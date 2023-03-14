const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const getWidth = () => window.innerWidth;
const getHeight = () => window.innerHeight;

const setCanvasDimensions = () => {
  canvas.width = getWidth();
  canvas.height = getHeight();
};

window.addEventListener("resize", () => {
  setCanvasDimensions();
  paint();
});

const paint = () => {
  ctx.clearRect(0, 0, getWidth(), getHeight());

  const rectSize = getWidth() / 25;
  let xPos = 0;
  let yPos = 0;

  for (let i = 0; i <= 25; i++) {
    for (let j = 0; j <= 25; j++) {
      const r = Math.random() * 20 + (i + j) * 5;
      const g = Math.random() * 100 + (i + j) * 1;
      const b = Math.random() * 100 + (i + j) * 1;
      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(xPos, yPos, rectSize, rectSize);

      xPos += rectSize;
    }
    xPos = 0;
    yPos += rectSize;
  }

  // window.requestAnimationFrame(paint);
};

setCanvasDimensions();
paint();
