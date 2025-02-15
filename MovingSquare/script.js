document.addEventListener('keydown', moveSquare);
let posX = 0;
let posY = 0;
const elem = document.getElementById("animate");
function moveSquare(event)
 {
    const step = 10;
    switch(event.key)
     {
        case "ArrowUp":
            if (posY > 0) posY -= step;
            break;
        case "ArrowDown":
            if (posY < 350) posY += step; 
            break;
        case "ArrowLeft":
            if (posX > 0) posX -= step;
            break;
        case "ArrowRight":
            if (posX < 350) posX += step;
            break;
    }
    elem.style.top = posY + "px"; 
    elem.style.left = posX + "px"; 
}
