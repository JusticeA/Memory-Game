/* Variables */

let panels = document.querySelectorAll(".container div");
console.log([...panels])
let audio = document.querySelectorAll("audio");
let classArray = ["fa-angular", "fa-node-js", "fa-vuejs", "fa-grunt", "fa-js", "fa-react", "fa-github", "fa-css3", "fa-html5", "fa-python"];
let classNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [];
const clicks = document.querySelector("p .clicks");
const bestScore = document.querySelector("p .bscore");
let secs = document.querySelector(".time .secs");
let mins = document.querySelector(".time .mins");
let bmins = document.querySelector(".btime .mins");
let bsecs = document.querySelector(".btime .secs");

/* Functionality */

if (localStorage.minutes === undefined) {
  console.log("Okay...");
  bmins.textContent = 0;
  bsecs.textContent = 0;
} else {
  bmins.textContent = localStorage.minutes;
  bsecs.textContent = localStorage.seconds;
}

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
let timeCount
let lastClicked;
let add = function () {
  clearInterval(timeCount);
  timeCount = setInterval(timer, 1000);
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
    if (bmins.textContent === "0" && bsecs.textContent === "0") {
      bmins.textContent = mins.textContent
      bsecs.textContent = secs.textContent
    } else if (parseInt(bmins.textContent + bsecs.textContent) > parseInt(mins.textContent + secs.textContent)) {
        bmins.textContent = mins.textContent
        bsecs.textContent = secs.textContent
        console.log("okay...");
        window.localStorage.setItem("minutes", `${mins.textContent}`);
        window.localStorage.setItem("seconds", `${secs.textContent}`)
    } 
    secs.textContent = 0;
    mins.textContent = 0;
    clicks.textContent = 0;
    clicks.style.color = "#AAB8E5"
    clicks.style.animationName = "notanimate"
    let newCount = bestScore.textContent;
    // console.log(newCount)
    if (newCount === "") {
      console.log("%c Okay!", "font-size: 34px; color: red;")
      // lastCount.style.color = "#7b1043c7"
      bestScore.style.color = "#7b1043c7"
      bestScore.textContent = `${lastCount} `
    } else if (lastCount <= newCount) {
      bestScore.textContent = bestScore.textContent;
    }
    setTimeout(delay, 1000);
  }
  lastCount = clicks.textContent;
  console.log(lastCount);
}

let timer = function () {
  secs.textContent++
  if (secs.textContent === "60") {
    mins.textContent++
    secs.textContent = 1;
  }
}


/* Event Listeners */

panels.forEach(panel => {
  panel.addEventListener("click", add);
})


let hide = document.querySelector(".hide");
window.addEventListener("load", genRand);
window.addEventListener("load", () => {
  hide.classList.add("open");
})
document.addEventListener("click", () => {
  hide.classList.remove("open");
})

