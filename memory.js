console.log("Getting there!");

let panels = document.querySelectorAll(".container div");

let arr = [];

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
  }
  console.log(arr);
}

let add = function () {
  this.classList.add("rotate", "fab", "fa-angular")
}


panels.forEach(panel => {
  panel.addEventListener("click", genRand)
})
