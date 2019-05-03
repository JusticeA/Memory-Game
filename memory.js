console.log("Getting there!");

let panels = document.querySelectorAll(".container div");
console.dir(panels)

let arr = [];
let classArray = ["fa-angular", "fa-node-js", "fa-vuejs", "fa-grunt", "fa-js", "fa-react", "fa-github", "fa-css3", "fa-html5", "fa-python"]
let classNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
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
  panels.forEach(panel => {
    let newClicked;
    if (panel.classList.contains("rotate")) {
      newClicked = this.classList;
      console.log(newClicked);
      if (newClicked.item(1) === lastClicked.item(1)) {
        
        newClicked.value = "visible";
        lastClicked.value = "visible";
      } else {
        newClicked.remove("rotate");
        lastClicked.remove("rotate");
      }
    }
  });
  this.classList.add("rotate");
  lastClicked = this.classList;
  console.log(lastClicked.item(1));
}

panels.forEach(panel => {
  panel.addEventListener("click", add);
})

window.addEventListener("load", genRand);
