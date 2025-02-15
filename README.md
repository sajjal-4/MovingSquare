# Arrow Key Controlled Animation

This project is a simple web application that allows you to move a red square within a yellow container using the arrow keys.

## Demo

https://github.com/user-attachments/assets/63cdc3e9-3f4e-4b63-91fd-e7117bc50ddf

## How to Use

1.  **Clone or Download:** Clone this repository to your local machine or download the ZIP file.
2.  **Open `index.html`:** Open the `index.html` file in your web browser.
3.  **Use Arrow Keys:** Use the Up, Down, Left, and Right arrow keys to move the red square within the yellow container.

## Files Included

*   `index.html`: The main HTML file containing the structure of the page (container and square).  It also links the CSS and JavaScript files.
*   `style.css`: The CSS file that styles the container and the square (size, colors, position).
*   `script.js`: The JavaScript file that contains the logic for capturing keyboard input and moving the square.

## Functionality

The JavaScript code works as follows:

1.  **Event Listener:** An event listener is attached to the entire document to listen for `keydown` events (when a key is pressed).
2.  **`moveSquare(event)` Function:** This function is called whenever a key is pressed.
3.  **Arrow Key Detection:** The function checks `event.key` to determine which arrow key was pressed.
4.  **Position Update:** Based on the arrow key, the `posX` and `posY` variables are updated, but only if the square will remain within the bounds of the container.
5.  **Square Movement:** Finally, the `top` and `left` styles of the `animate` element (the red square) are updated to move the square to its new position.

## Customization

*   **Styling:** Customize the appearance of the container and square (size, colors, background, etc.) by modifying the `style.css` file.
*   **Speed:** Change the `step` variable in `script.js` to adjust the movement speed of the square.
*   **Container Size:** Change the `width` and `height` of the container in the CSS, and update the boundary check in `script.js` to match the new container size.

## Technologies Used

*   HTML
*   CSS
*   JavaScript

## Possible Improvements

*   **Smoother Movement:** Implement smoother animation using `requestAnimationFrame`.
*   **Touch Support:** Add support for touch events to move the square on mobile devices.
*   **Diagonal Movement:** Allow diagonal movement by handling combinations of arrow keys.
