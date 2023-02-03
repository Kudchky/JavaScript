console.log("welcome to my animation initial");

function Loader() {
  this.frames = [".", "..", "..."];
  this.i = 0;
  this.animate = function () {
    setInterval(() => {
      console.clear();
      console.log(this.frames[this.i]);
      this.i + 1 === this.frames.length ? (this.i = 0) : this.i++;
    }, 500);
  };
}

load = new Loader();
load.animate();
