console.log("Hello, World!");

const container = document.querySelector(".container");
container.style.padding = "20px";
container.style.backgroundColor = "gray";
container.style.display = "flex";
container.style.justifyContent = "center";

for (let i = 0; i < 16; i++) {
  const col = document.createElement("div");
  container.appendChild(col);

  for (let j = 0; j < 16; j++) {
    const row = document.createElement("div");
    row.style.backgroundColor = "green";
    row.style.border = "solid 1px black";
    row.style.display = "flex";
    row.style.displayDirection = "column";
    row.style.flex = "1";
    row.style.padding = "5px";
    col.appendChild(row);
  }
}
