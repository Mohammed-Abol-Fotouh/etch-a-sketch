const container = document.querySelector(".container");
let gridSize = 10;
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
	const grid = +prompt("Enter preferred grid size:");
	if (grid > 100 || grid < 1) {
		alert("Grid size must be between 1 and 100.");
		return;
	} else {
		gridSize = grid;
	}

	container.innerHTML = "";
	document.documentElement.style.setProperty("--grid-size", gridSize);

	for (let i = 0; i < gridSize; i++) {
		const row = document.createElement("div");
		row.classList.add("row");

		for (let j = 0; j < gridSize; j++) {
			const square = document.createElement("div");
			square.classList.add("square");
			row.appendChild(square);
			square.addEventListener("mouseover", () => {
				square.style.backgroundColor = "red";
			});
		}

		container.appendChild(row);
	}
});
