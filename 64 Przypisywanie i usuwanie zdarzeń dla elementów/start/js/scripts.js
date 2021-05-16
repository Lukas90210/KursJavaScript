var btn2 = document.querySelector("#btn2"),
    btn23 = document.querySelector("#btn3");

function sayHello() {
    alert("Hej!")
}

// tak nie da się przypisać kilka zdarzeń.
btn2.onclick = sayHello;
btn2.onclick = function () {
    alert("hejka");
}
// ale istnieje taki oto ciekawy sposobik na to.

btn3.addEventListener("click", sayHello, false);
btn3.addEventListener("click", function () {
    alert("Hello");
}, false);

// w ten sposób możemy sobie dodawać wiele zdarzeń :)
//
// a tutaj usuwamy zdarzenie :)

btn2.onclick =  null;
btn3.removeEventListener("click", sayHello, false);

