var container = document.getElementById("container");

var firstName = document.getElementsByName("firstName")[0];

var paragraphs = document.getElementsByTagName("p");

//jest to żywa lista, czyli jak usunę element to dalej nie będzie już wyświetlany

var texts = document.getElementsByClassName("text");

var h1 = document.querySelector("h1");

var form = document.querySelector("#myForm");

var submit = form.querySelector("button[type='submit']");

var links = document.querySelectorAll("a");

//Nie jest to żywa lista jak getEnementByTagName

document.all;
document.forms;
document.images;
document.links;

var firstForm = document.forms[0];