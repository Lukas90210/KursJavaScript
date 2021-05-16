//można tak pobrać rozmiary obrazka. Pierw pokazane będzie 0, czyli dane przed wczytaniem a potem dopiero po wczytaniu czyli z finkcji, która jest w window.
window.addEventListener("load", function (e) {

    let img = document.querySelector("img");

    console.log("Wymiary: ", img.offsetWidth + "x" + img.offsetHeight + "px");

}, false);

//jeśli w head jest script.js to możemy czytać body przez linijkę nr 6 "DOMContentLoaded". Inaczej nie przeczyta jeśli nie jest script.js w body.
document.addEventListener("DOMContentLoaded", function (e) {

    // let h1 = document.querySelector("h1");
    //
    // console.log(h1.textContent);

    let img = document.querySelector("img");

    console.log("Wymiary: ", img.offsetWidth + "x" + img.offsetHeight + "px");

}, false);

