console.log("Hello, World!");

const container = document.createElement("div");
container.setAttribute("class", "container");
container.style.alignItems = "center";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.margin = "auto";
container.style.width = "960px";
container.style.height = "960px";

const resizeBtn = document.createElement("button");
resizeBtn.textContent = "Resize";
resizeBtn.style.padding = "10px";
resizeBtn.style.margin = "20px";
resizeBtn.addEventListener("click", (e) => {
  let num = Number(prompt("Enter a number"));
  while (isNaN(num) || num < 0 || num > 100) {
    if (num > 100) {
      num = Number(prompt("Please enter a number less than 100"));
    } else {
      num = Number(prompt("Please enter a valid number"));
    }
  }

  const oldGrid = document.querySelector(".grid");
  const newGrid = createGrid(num);
  container.removeChild(oldGrid);
  container.appendChild(newGrid);
});
/* Add resize button to container */
container.appendChild(resizeBtn);

/* Construct grid container */
function createGrid(num) {
  let grid = document.createElement("div");
  grid.setAttribute("class", "grid");
  grid.style.alignItems = "center";
  grid.style.backgroundColor = "gray";
  grid.style.display = "flex";
  grid.style.height = "auto";
  grid.style.justifyContent = "center";
  grid.style.flexWrap = "wrap";

  const slotSize = Math.floor(960 / num) - 2;
  for (let i = 0; i < num * num; i++) {
    const slot = document.createElement("div");
    slot.style.width = `${slotSize}px`;
    slot.style.height = `${slotSize}px`;
    slot.style.background.color = "red";
    slot.style.border = "solid 1px black";
    slot.style.boxSizing = "border-box";

    /* Function that changes the background when mouse
         hovers over an item */
    slot.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "green";
    });

    grid.appendChild(slot);
  }

  return grid;
}

/* Add container to the body of html */
document.body.appendChild(container);

let grid = createGrid(16);
/* Add grid to container */
container.appendChild(grid);
