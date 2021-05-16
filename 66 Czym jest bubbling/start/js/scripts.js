var body = document.body,
    button = document.querySelector("#btn");

body.addEventListener("click", function(e) {
    console.log("Klik w body");
}, false);

button.addEventListener("click", function(e) {
    // e.stopPropagation();
    // e.stopImmediatePropagation();
    console.log("klik w button");
}, false);

button.addEventListener("click", function(e) {

    console.log("klik w button again");
}, false);