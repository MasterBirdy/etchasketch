function fillBoard(numberOfSquares) {
     for (let i = 0; i < numberOfSquares; i++) {
          let row = document.createElement("div");
          row.classList.add("row");
          for (let j = 0; j < numberOfSquares; j++) {
               let block = document.createElement("div");
               block.classList.add("block");
               if (j === numberOfSquares - 1) {
                    block.classList.add("border-right");
               }
               if (i === numberOfSquares - 1) {
                    block.classList.add("border-bottom");
               }
               block.addEventListener("mouseenter", changeColor);
               block.style.width = (45 / numberOfSquares) + "rem";
               block.style.height = (45 / numberOfSquares) + "rem";
               row.appendChild(block);
          }
          container.appendChild(row);
     }
}

function changeColor(e) {
     if (setting === "black") {
          //this.setAttribute('style', 'background-color: black;');
          this.style.backgroundColor = "black";

     }
     else if (setting === "rainbow") {
          let string = `rgb(` + Math.floor(Math.random() * 256) +
               `, ` + Math.floor(Math.random() * 256) +
               `, ` + Math.floor(Math.random() * 256) + `)`;
          this.style.backgroundColor = string;
     }
     else if (setting === "grey") {
          let colorArray = window.getComputedStyle(this, null).getPropertyValue('background-color').match(/\d+/g);
          if (colorArray[0] !== colorArray[1] && colorArray[1] !== colorArray[2]) {
               this.style.backgroundColor = "white";
          }
          else {
               let newValue = colorArray[0] - 25;
               if (newValue < 0) {
                    this.style.backgroundColor = "white";
               }
               else {
                    let string = `rgb(` + newValue +
                         `, ` + newValue +
                         `, ` + newValue + `)`;
                    this.style.backgroundColor = string;
               }
          }
     }
}

function clearAll() {
     const blocks = document.querySelectorAll(".block");
     blocks.forEach((block) => {
          block.style.backgroundColor = "white";
     });
}

function clearActivated() {
     rainbowButton.classList.remove("activated");
     greyButton.classList.remove("activated");
     blackButton.classList.remove("activated");
}
let setting = "black";
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearAll);
const blackButton = document.getElementById("blackButton");
blackButton.addEventListener("click", function () {
     setting = "black";
     clearActivated();
     blackButton.classList.add("activated");
});
const rainbowButton = document.getElementById("rainbowButton");
rainbowButton.addEventListener("click", function () {
     setting = "rainbow";
     clearActivated();
     rainbowButton.classList.add("activated");
});
const greyButton = document.getElementById("greyButton");
greyButton.addEventListener("click", function () {
     setting = "grey";
     clearActivated();
     greyButton.classList.add("activated");
})
const remakeButton = document.getElementById("remakeButton");
remakeButton.addEventListener("click", function () {
     let numberOfSquares = prompt("How many squares per row would you like?");
     container.innerHTML = "";
     fillBoard(numberOfSquares);
})
const container = document.getElementById("container");
fillBoard(16);