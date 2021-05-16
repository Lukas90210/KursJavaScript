var container = document.querySelector("#container"),
    box = container.querySelector(".box");

console.log(box.scrollTop);
console.log(box.scrollLeft);

//? Pokazuje o ile przesunięto suwak.

window.scrollTop(0, 200);
window.scrollLeft(0, -100);

//? przenosi o tyle w dane miejsce.