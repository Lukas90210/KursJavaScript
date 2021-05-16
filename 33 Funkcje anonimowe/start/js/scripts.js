(function() {

    var arr = [1, 45, 23, 29, 3];

    //sortowanie tablicy
    arr.sort(function(a, b) {
    
        return a - b;
    
    });
    
    //

    function sayHello(text, getName) {

        var result = text + getName();

        return result;
    }

    console.log( sayHello('Witaj, ', function() {
        return 'Piotr';
    }));

})();


// (function(){
        // FUNKCJA ANONIMOWA, KTÓRĄ MOŻNA WYWOŁAĆ POPRZEZ (); NA KOŃCU. NIE JEST TO FUNJKCJA GLOBALNA, MA OGRANICZONY DOSTĘP TYLKO W TEJ FUNJKCJI.
// })();

