/* Variables */

let panels = document.querySelectorAll(".container div");
console.log([...panels])
let audio = document.querySelectorAll("audio");
let classArray = ["fa-angular", "fa-node-js", "fa-vuejs", "fa-grunt", "fa-js", "fa-react", "fa-github", "fa-css3", "fa-html5", "fa-python"];
let classNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [];
const clicks = document.querySelector("p .clicks");
const bestScore = document.querySelector("p .bscore");


/* Functionality */

let genRand = function () {
  let i;
  for (i = 0; i < 20; i++) {
    while (arr.length < 20) {
      let rand = Math.floor(Math.random() * 20);
      if (arr.indexOf(rand) == -1) {
        console.log(rand);
        arr.push(rand);
      }
    }
    let k = 0;
    arr.forEach(num => {
      if (k >= 10) {
        k = 0;
      };
      panels[num].classList.add(`${classArray[k]}`);
      k++;
    })
  }
  console.log(arr);
}

let lastClicked;
let add = function () {
  clicks.textContent++
  if (clicks.textContent >= 38) {
    clicks.style.color = "#7b1043c7"
    clicks.style.animationName = "animate"
  }
  let newClicked;
  audio[0].currentTime = 0;
  audio[0].play();
  panels.forEach(panel => {
    if (panel.classList.contains("rotate")) {
      newClicked = this.classList;
      console.log(newClicked);
      if (newClicked.item(1) === lastClicked.item(1) && !newClicked.contains("rotate")) {
        audio[2].play();
        newClicked.value = "invisible";
        lastClicked.value = "invisible";
       
      } else {
        lastClicked.remove("rotate");
        newClicked.remove("rotate");
      }
    }
  });
  this.classList.add("rotate");
  lastClicked = this.classList;
  console.log(lastClicked.item(1));
  restart();
}

let lastCount;
const restart = function () {
  let checker = Array.from(panels).every(panel => {
    return (panel.classList.contains("invisible"));
  });
  let delay = () => {
    panels.forEach(panel => {
      panel.classList.remove("rotate", "invisible")
      panel.classList.add("fab")
    })
    arr = []
    genRand();
    // window.location.reload()
  }
  if (checker) {
    clicks.textContent = 0;
    clicks.style.color = "#AAB8E5"
    clicks.style.animationName = "notanimate"
    let newCount = clicks.textContent;
    console.log(newCount)
    if (newCount <= lastCount) {
      console.log("%c Okay!", "font-size: 34px; color: red;")
      // lastCount.style.color = "#7b1043c7"
      bestScore.style.color = "#7b1043c7"
      bestScore.textContent = ` / ${lastCount} `
    }
    setTimeout(delay, 1000);
  }
  lastCount = clicks.textContent;
  console.log(lastCount);
}

/* Event Listeners */

panels.forEach(panel => {
  panel.addEventListener("click", add);
})

window.addEventListener("load", genRand);

