console.log("welcome to my animation initial");

function Loader() {
  this.frames = [".", "..", "..."];
  this.i = 0;
  this.result;
  let interval;

  this.render = () => {
    console.clear();
    console.log(this.frames[this.i]);
    this.i + 1 === this.frames.length ? (this.i = 0) : this.i++;
  };

  this.animate = function () {
    interval = setInterval(this.render, 500);
  };

  this.load = function (name, ...args) {
    this.animate();
    setTimeout(() => {
      clearInterval(interval);
      console.clear();
      //this.result = cb(...args);
      this.result = this.whenAnimationComplete(name, ...args);
    }, 5000);
  };
}

function htmlWrapper(tag) {
  return (content) => {
    return `<${tag}>${content}</${tag}>`;
  };
}

function add(a, b) {
  return (c) => a + b + c;
}

function Shark() {
  let position = 0;
  let interval;
  let length = 50;
  let symbol = "/|";

  this.draw = function () {
    const prev = position > 0 ? position : 0;
    const next = length - symbol.length - prev;
    const line = `${"_".repeat(prev)}${symbol}${"_".repeat(next)}`;
    console.clear();
    console.log(line);
    position++;
    if (position > length - symbol.length) position = 0;
  };

  this.animate = function () {
    interval = setInterval(this.draw, 100);
  };

  this.init = function () {
    this.animate();
    setTimeout(() => {
      clearInterval(interval);
      console.clear();
    }, 10000);
  };
  this.init();
}

//Factory pattern
function factory(name, ...args) {
  const loader = new Loader();
  loader.whenAnimationComplete = function (name, ...args) {
    switch (name) {
      case "shark":
        return new Shark();
      case "html wrapper":
        return htmlWrapper(...args);
      case "add":
        return add(...args);
      default:
        console.log("No action not found");
    }
  };
  loader.load(name, ...args);
  return loader;
}
