


// Background Color Changer

let body = document.querySelector("body");
let button = document.getElementById("bgChangeBtn")

button.addEventListener("click", () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r},${g},${b})`;

    body.style.backgroundColor = color;
});