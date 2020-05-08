var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    // loops through buttons to add or remove class of selected--------------------------------------------
setupModeButtons();
// click event listener to see if the user clicked the right square--------------
setupSquares();
reset();
}

function setupModeButtons(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            // removes the class off both buttons
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            // adds it to the selected button
            this.classList.add("selected");
            // figure out how many squares to show
            this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;
            reset();
        });
    }
}

function setupSquares(){
    for(i = 0; i < squares.length; i++){
        // add click listeners to squares
        squares[i].addEventListener("click", function(){
            // grab color of clicked color
            var clickedColor = this.style.backgroundColor;
            // compare color to picked color
            if(clickedColor === pickedColor){
                // players wins the game
                messageDisplay.textContent = "Correct!!";
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Agian!";
            }
        });
    }
}

// resets a new set of colors for the squares------------------------------------------------------
function reset(){
     // generate all new colors
     colors = generateRandomColors(numOfSquares);
     // pick new color for array
     pickedColor = pickColor();
     // change colorDisplay to match color
     colorDisplay.textContent = pickedColor;
     resetButton.textContent = "New Colors";
     // makes the display message display: none
     messageDisplay.textContent = "";
     // loops through the squares to set display -------------------------------------------------
     for(var i = 0; i < squares.length; i++){
         if(colors[i]){
             squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
         } else {
            squares[i].style.display = "none";
        }
    }
     h1.style.backgroundColor = "#ed5565";
}

// reset function to listen for button clicks--------------------------------------------
resetButton.addEventListener("click", function(){
    reset();
})


function changeColors(color){
    // loop through all squares
    for(i = 0; i < squares.length; i++){
    // change color of all squares to match given color
    squares[i].style.backgroundColor = color;
    }  
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}


function generateRandomColors(num){
    // make an array
    var arr = [];
    // add num random colors to array
    for(var i = 0; i < num; i++){
        // get random color and push in array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a red from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}