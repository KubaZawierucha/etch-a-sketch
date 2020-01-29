const numOfDivsInRow = 16;
const container = document.querySelector(".container");

for (let i = 0; i < numOfDivsInRow; i++) {
    for (let j = 0; j < numOfDivsInRow; j++) {
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("item");
        container.appendChild(innerDiv);
    }
}