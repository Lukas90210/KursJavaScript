var container = document.querySelector("#container"),
    box = container.querySelector(".box");

console.log(box.offsetTop);
console.log(box.offsetLeft);
console.log(box.offsetParent); //Pokazuje położenie względem rodzica.

var pos = box.getBoundingClientRect();
console.log(pos); //pokazuje położenie 

console.log(document.elementFromPoint(400, 200)); 
//pokazuje co znajduje się w danym miejscu x i y.