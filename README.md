# Etch a Skitch

This is a simple interactive web game where you can create and color a grid of squares. Hovering over a square changes its color to a random RGB value. You can also change the grid size using a prompt.

## How to Play

1.  Open the `index.html` file in your web browser.
2.  You will see a 10x10 grid of squares.
3.  Hover your mouse over any square to change its background color to a randomly generated RGB color.
4.  To change the grid size, click the button.
5.  A prompt will appear asking you to enter a new grid size. Enter a number between 1 and 100 (inclusive).
6.  The grid will be regenerated with the new size. If you enter an invalid number (less than 1 or greater than 100), an alert will appear, and the grid size will remain unchanged.

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Run

1.  Download the `index.html` file and any associated CSS or JavaScript files (if separated).
2.  Open the `index.html` file in your web browser.

## Game Logic

The game uses JavaScript to dynamically create and manipulate the grid.

- The `createGrid()` function generates the grid of squares based on the current `gridSize`. It also attaches event listeners to each square to handle the mouseover event.
- The `getRandomColor()` function generates a random RGB color string.
- The button's click event listener prompts the user for a new grid size. It validates the input and calls `createGrid()` to redraw the grid if the input is valid.

## Customization

You can customize the appearance of the grid by modifying the CSS styles. For example, you can change the size, spacing, and border of the squares. You can also modify the JavaScript code to change the color generation logic or add other interactive features.

## Future Improvements

- Add a way to reset the grid to its initial state.
- Implement different color palettes or color generation algorithms.
- Allow users to draw on the grid or create patterns.
- Improve the styling and user interface.
