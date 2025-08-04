// Ex 1 Hello Dom

// let element = document.querySelector("h1");
// element.textContent = "Welcome to Dom Manipulation";
// element.style.color = "blue";


// Ex 2  Paragraph Modifier

// let element = document.querySelector("p");
// element.textContent = "Welcome to Paragraph Modifier";
// element.style.fontSize = "20px";
// element.style.fontWeight = "bold";


// Ex 3 Multiple Elements

// let element = document.getElementById("box");
// let elements = document.getElementById("boxer");
// let elemented = document.getElementById("boxing");
// element.style.backgroundColor = "red"
// elements.style.backgroundColor = "green"
// elemented.style.backgroundColor = "yellow"
// element.textContent = "This is changed";
// elements.textContent = "This was also Changed";
// elemented.textContent = "This is also has Changed";


// Ex 4 Class Selection

// let elements = document.getElementsByClassName("highlight");
// let elementsOfArray = Array.from(elements);
// elementsOfArray.forEach(highlight => {
//     highlight.style.backgroundColor = "yellow";
//     highlight.style.fontStyle = "italic";
// });


// EX 5 Tag selection

// let fruitList = document.querySelectorAll("li");
// fruitList.forEach(li => {
//     li.style.color = "green";
//     li.textContent = "•" + li.textContent;
// });


// EX 6 Style Object Practice

// let myDiv = document.getElementById("cpu");
// myDiv.style.width = "200px";
// myDiv.style.height = "100px";
// myDiv.style.border = "2px solid red";
// myDiv.style.padding = "20px";
// myDiv.style.textAlign = "center";


// Ex 7 Dynamic Styling

// const button = document.getElementById("changeBtn");
// const box = document.getElementById("box");
// function getRandomColor() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     return `rgb(${r}, ${g}, ${b})`;
// }
// button.addEventListener("click", () => {
//     box.style.backgroundColor = getRandomColor();
//     const randomRadius = Math.floor(Math.random() * 51);
//     box.style.borderRadius = `${randomRadius}px`;
// });


// Ex 8 CSS Class Toggle

// let themebox = document.getElementById("themebox");
// let darkBtn = document.getElementById("darkBtn");
// let whiteBtn = document.getElementById("lightBtn");
// let colorfulBtn = document.getElementById("colorfulBtn");

// function applyTheme(theme) {
//     themebox.classList.remove("dark", "light", "colorful");
//     themebox.classList.add(theme);
// }
// darkBtn.addEventListener("click", () => applyTheme("dark"));g
// lightBtn.addEventListener("click", () => applyTheme("light"));
// colorfulBtn.addEventListener("click", () => applyTheme("colorful"));


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