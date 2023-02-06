function Loader() {
  this.frames = ["|", "/", "-", "\\"];
  this.i = 0;
  this.snippet;
  let interval;

  this.render = () => {
    console.clear();
    console.log(this.frames[this.i]);
    this.i++;
    if (this.i === this.frames.length) this.i = 0;
  };

  this.animate = function () {
    interval = setInterval(this.render, 500);
  };

  this.load = function (name, ...args) {
    this.animate();
    setTimeout(() => {
      clearInterval(interval);
      console.clear();
      this.snippet = this.animationAlreadyLoaded(name, ...args);
    }, 3000);
  };
}

function Clock() {
  this.seconds = 0;
  this.minutes = 0;
  this.hours = 0;

  this.formatClock = function (time) {
    return time.toString().padStart(2, "0");
  };

  this.incrementTime = function () {
    this.seconds++;
    if (this.seconds > 59) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes > 59) {
        this.minutes = 0;
        this.hours++;
        if (this.hours > 23) {
          this.hours = 0;
        }
      }
    }
  };

  this.renderClock = () => {
    console.log(
      `${this.formatClock(this.hours)}:${this.formatClock(
        this.minutes
      )}:${this.formatClock(this.seconds)}`
    );
  };

  this.init = function () {
    setInterval(() => {
      console.clear();
      this.renderClock();
      this.incrementTime();
    }, 1000);
  };

  document.addEventListener("click", () => {
    console.clear();
    console.log("Let's keep playing!");
  });

  this.init();
}
function Marquee(phrase, length) {
  let position = length;
  let interval;
  let i = 0;
  let y = 0;

  this.designMarquee = function () {
    const prev = position > 0 ? position : 0;
    const next = length - phrase.substring(0, i).length - prev; //0
    const line = `${" ".repeat(prev)}${phrase.substring(0, i)}${" ".repeat(
      next
    )}`;
    const line2 = `${" ".repeat(prev)}${phrase.substring(y)}${" ".repeat(
      next
    )}`;
    console.clear();
    console.log(line);
    position--;
    i++;
    // if (position > phrase.length) position = 0;
    if (position <= 0 && y < phrase.length) {
      console.clear();
      console.log(line2);
      y++;
    }
    if (position <= 0 && y >= phrase.length) {
      clearInterval(interval);
    }
  };
  this.init = function () {
    interval = setInterval(this.designMarquee, 300);
  };
  this.init();
}

function numberFormatter(base, array_suffixes) {
  return (number) => {
    let index_array_suffixes = 0;
    while (number >= base && index_array_suffixes < array_suffixes.length - 1) {
      number = number / base;
      index_array_suffixes++;
    }
    return `${Math.floor(number)}${array_suffixes[index_array_suffixes]}`;
  };
}

function EasterEgg(name, ...args) {
  let loader = new Loader();
  loader.animationAlreadyLoaded = (name, ...args) => {
    switch (name) {
      case "clock":
        return new Clock();
      case "tic tac toe":
        return new TicTacToe();
      case "number formatter":
        return numberFormatter(...args);
      case "marquee":
        return new Marquee(...args);
    }
  };
  loader.load(name, ...args);
  return loader;
}

//new EasterEgg("clock");
//const formatter = new EasterEgg("number formatter", 1024, ["b", "Kb", "Mb"])
//const formatter = new EasterEgg("number formatter", 60, ["ss", "mm", "hh"]);
new EasterEgg("marquee", "Codeable FTW!", 20);
