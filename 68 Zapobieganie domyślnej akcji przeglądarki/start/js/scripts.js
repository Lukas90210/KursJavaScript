var form = document.querySelector("#myForm"),
    link = document.querySelector("#showMessage");

form.addEventListener("submit", function (e) {

    if(this.firstName.value === "") {
        //jeśli firstName będzie puste to ma pokazać się komunikat.
        e.preventDefault();
        alert("Wpisz Imię!")
    }

}, false);

form.querySelector("#firstName").addEventListener("keypress", function(e) {

    //Nie można wpisać litery "a".

    if(String.fromCharCode(e.charCode) === "a") {
        e.preventDefault();
    }
}, false);

//wyświetlanie message

link.onclick = function(e) {

    e.preventDefault();
    var message = document.querySelector(e.target.hash); //e.target.hash to pobranie wiadomości #message

    message.style.display = "block";    //wyświetlanie blokowe z none/block (w html było ustatawione na none).

    return false; //false to alternatywa dla preventDefault.

}