export default class Canvas {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.setCanvasDimensions();
    this.paint();
  }

  getWidth() {
    return window.innerWidth;
  }

  getHeight() {
    return window.innerHeight;
  }

  setCanvasDimensions() {
    canvas.width = this.getWidth();
    canvas.height = this.getHeight();
  }

  clear() {
    this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());
  }

  paint() {
    this.ctx.clearRect(0, 0, this.getWidth(), this.getHeight());

    const rectSize = this.getWidth() / 25;
    let xPos = 0;
    let yPos = 0;

    for (let i = 0; i <= 25; i++) {
      for (let j = 0; j <= 25; j++) {
        const r = Math.random() * 20 + (i + j) * 5;
        const g = Math.random() * 100 + (i + j) * 1;
        const b = Math.random() * 100 + (i + j) * 1;
        this.ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        this.ctx.fillRect(xPos, yPos, rectSize, rectSize);

        xPos += rectSize;
      }
      xPos = 0;
      yPos += rectSize;
    }
  }
}
