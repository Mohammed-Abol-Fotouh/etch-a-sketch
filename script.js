const container = document.querySelector(".container");
let gridSize = 10;
const btn = document.querySelector("button");
const colors = [
	"#FF6B6B", // Red
	"#4ECDC4", // Teal
	"#45B7D1", // Blue
	"#96CEB4", // Green
	"#FFEEAD", // Yellow
	"#D4A5A5", // Pink
	"#7D5A5A", // Brown
];

document.documentElement.style.setProperty("--grid-size", gridSize);

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
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
