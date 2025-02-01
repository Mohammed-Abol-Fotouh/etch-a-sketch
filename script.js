const container = document.querySelector(".container");
const gridSize = 10;

container.style.setProperty("grid-size", gridSize);

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
