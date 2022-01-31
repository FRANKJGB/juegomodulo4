
let colores=["RGB(179, 0, 152)", "RGB(179, 0, 18)", "RGB(89, 89, 89)", "RGB(179, 116, 0)", "RGB(0, 191, 255)", "RGB(137, 231, 95)"]
let colors = generateRandomColors(6);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColour();
let colorDisplay = document.querySelector("#colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let easy = document.querySelector("#easy");
let hard = document.querySelector("#hard");
let numSquares = 6

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colores[i]
}

colorDisplay.textContent = pickedColor;


for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  
    squares[i].addEventListener("click", function () {
      
        let clickedColour = this.style.backgroundColor;
        if (clickedColour === pickedColor) {
            message.textContent = "¡Muy bien!";
            changeColors(clickedColour);
            reset.textContent = "¿Jugaras de nuevo?"
        } else {
            this.style.backgroundColor = "#030001 ";
            message.textContent = "¡Sigue intentando!";
        }
    });
}


function changeColors(color) {
    h1.style.backgroundColor = color;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}


function pickColour() {
    let aleatorio = Math.floor(Math.random() * colors.length);
    return colors[aleatorio];
}


function randomColors() {
    let v1 = Math.floor(Math.random() * 256);
    let v2 = Math.floor(Math.random() * 256);
    let v3 = Math.floor(Math.random() * 256);
    let color = "rgb(" + v1 + ", " + v2 + ", " + v3 + ")";
    return color;
}


function generateRandomColors(opcion) {
    let arregloC = [];
    
    for (var i = 0; i < opcion; i++) {
        arregloC.push(randomColors());
    }
    return arregloC;
}

reset.addEventListener("click", function () {
    colors = generateRandomColors(6);
    pickedColor = pickColour();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
    reset.textContent = "Nuevos Colores"
});

easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    numSquares = 3
    pickedColor = pickColour();
    changeColors.textContent = pickedColor;
   
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if (i > 2) {
            squares[i].style.display = "none";
        }
    }
})

hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    colors = generateRandomColors(numSquares);
    numSquares = 6
    pickedColor = pickColour();
    changeColors.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        if (squares[i].style.display === "none") {
            squares[i].style.display = "block";
        }
        squares[i].style.backgroundColor = colors[i];
    }
})
