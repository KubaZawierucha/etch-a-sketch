let numOfDivsInRow = 16;
const screenHeight = 800;
const screenWeight = 1600;
let isDown = false;

const container = document.querySelector(".container");
const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("change", watchColor, false);

generateGrid();

const popUpDiv = document.querySelector(".popup-div");
const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    popUpDiv.style.display = "block";
})

const radioOptions = Array.from(document.querySelectorAll("input[type='radio']"));
const gridSizeForm = document.querySelector("#submitButton");
gridSizeForm.addEventListener("click", () => {
    for (let option of radioOptions) {
        if (option.checked) {
            numOfDivsInRow = option.value;
            generateGrid();
            popUpDiv.style.display = "none";
            break;
        }
    }

})

function generateGrid() {
    for (let i = 0; i < numOfDivsInRow * numOfDivsInRow * 2; i++) {
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("item");
    
        innerDiv.style.width = screenHeight / numOfDivsInRow + "px";
        innerDiv.style.height = screenHeight / numOfDivsInRow + "px";

        innerDiv.addEventListener('mouseover', changeColor);
        innerDiv.addEventListener('click', changeColorWithClick);

        container.appendChild(innerDiv);
    }
}

window.addEventListener('mousedown', () => {
    isDown = true;
})

window.addEventListener("mouseup", () => {
    isDown = false;
})

window.addEventListener('load', (e) => {
    color = colorPicker.value;
})

function changeColor(e) {
    if (isDown) {
        e.target.style.backgroundColor = color;

        // Mechasnim of changing the opacity of the single square (i.e. you have to enter one square a few times to get it colored).
        // However, it is pointless to use it, when we can select any color with the color picker.

        // if (e.target.style.opacity !== "") {
        //     e.target.style.opacity = +(e.target.style.opacity) + 0.5;
        // } else {
        //     e.target.style.backgroundColor = "green";
        //     e.target.style.opacity = 0.2;
        // }
    }
}

function changeColorWithClick(e) {
    e.target.style.backgroundColor = color;

    // Mechasnim of changing the opacity of the single square (i.e. you have to enter one square a few times to get it colored).
    // However, it is pointless to use it, when we can select any color with the color picker.

    // if (e.target.style.opacity !== "") {
    //     e.target.style.opacity = +(e.target.style.opacity) + 0.5;
    // } else {
    //     e.target.style.backgroundColor = "green";
    //     e.target.style.opacity = 0.2;
    // }
}

function watchColor(e) {
    color = e.target.value;
}
