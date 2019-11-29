function fillBoard(){
     for(let i = 0; i < 16; i++)
     {
          let row = document.createElement("div");
          row.classList.add("row");
          for(let j = 0; j < 16; j++)
          {
               let block = document.createElement("div");
               block.classList.add("block");
               row.appendChild(block);
          }
          container.appendChild(row);
     } 
}

const container = document.getElementById("container");
fillBoard();