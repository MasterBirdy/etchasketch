function fillBoard(){
     for(let i = 0; i < 16; i++)
     {
          let row = document.createElement("div");
          row.classList.add("row");
          for(let j = 0; j < 16; j++)
          {
               let block = document.createElement("div");
               block.classList.add("block");
               if (j === 15)
               {
                    block.classList.add("border-right");
               }
               if (i === 15)
               {
                    block.classList.add("border-bottom");
               }
               block.addEventListener("mouseenter", changeColor);
               row.appendChild(block);
          }
          container.appendChild(row);
     } 
}

function changeColor(e){
     if (setting === "black")
     {
          this.setAttribute('style', 'background-color: black;');
     }
     else if (setting === "rainbow")
     {
          let string = `background-color: rgb(`+ Math.floor(Math.random() * 256) + 
          `, ` + Math.floor(Math.random() * 256) + 
          `, ` + Math.floor(Math.random() * 256) + `);`;
          this.setAttribute('style', string);
     }
}

function clearAll(){
     const blocks = document.querySelectorAll(".block");
     blocks.forEach((block) => {
          block.setAttribute('style', 'background-color: white;');
     });
}

function clearActivated(){
     rainbowButton.classList.remove("activated");
     greyButton.classList.remove("activated");
     blackButton.classList.remove("activated");
}
let setting = "black";
const clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", clearAll);
const blackButton = document.getElementById("blackButton");
blackButton.addEventListener("click", function(){
     setting = "black";
     clearActivated();
     blackButton.classList.add("activated");
});
const rainbowButton = document.getElementById("rainbowButton");
rainbowButton.addEventListener("click", function(){
     setting = "rainbow";
     clearActivated();
     rainbowButton.classList.add("activated");
});
const greyButton = document.getElementById("greyButton");
greyButton.addEventListener("click", function(){
     setting = "grey";
     clearActivated();
     greyButton.classList.add("activated");
})
const container = document.getElementById("container");
fillBoard();