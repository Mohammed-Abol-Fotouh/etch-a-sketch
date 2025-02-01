const container = document.querySelector(".container");
let gridSize = 10;
const btn = document.querySelector("button");

document.documentElement.style.setProperty("--grid-size", gridSize);

function getRandomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	return `rgb(${r},${g},${b}`;
}

function createGrid() {
	container.innerHTML = "";

	for (let i = 0; i < gridSize; i++) {
		const row = document.createElement("div");
		row.classList.add("row");

		for (let j = 0; j < gridSize; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			row.appendChild(square);
			square.addEventListener("mouseover", () => {
				square.style.backgroundColor = getRandomColor();
			});
		}

		container.appendChild(row);
	}
}

createGrid();

btn.addEventListener("click", () => {
	const grid = +prompt("Enter preferred grid size:");
	if (grid > 100 || grid < 1) {
		alert("Grid size must be between 1 and 100.");
		return;
	} else {
		gridSize = grid;
	}

	createGrid();
});
