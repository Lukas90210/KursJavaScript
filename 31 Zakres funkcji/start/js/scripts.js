function init() {

    var firstName = "Maciej";

    function sayHello(text) {

        var lastName = "Kowalski";

        console.log("Cześć, " + firstName + " " + lastName);

    }

    window.hello = sayHello;

}

init();
// hello(); //można wstawić tutaj jak i w scripts2.js

//funkcja ma dostęp tylko w miejscu gdzie została zdefiniowana.
//window to obiekt globalny.
//tylko w funkcion() pliki mają zakres i nie wychodzą poza, czyli
// w innych plikach (scripts2.js) nie są widoczne
