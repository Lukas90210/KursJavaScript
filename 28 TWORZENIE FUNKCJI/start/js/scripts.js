var text = "Witaj";

sayHello();
 //ten rodzaj zapisu ma pierwszenstwo bez definiowania zmiennej. Czyli sayHello(); może wyjść na górę

function sayHello() {      

    console.log(text);

    var text = "Cześć";     // na samągórę funkcji idzie sama nazwa zmiennej a jej wartość zostaje na miejscu i to nie zadziała

    console.log(text);      //dlatego tutaj musi być console.log('text');

}

sayHello2();            //Tutaj się nie da ponieważ jest w var. sayHello2(); musi znajdować się pod function;

var sayHello2 = function() {

    console.log("Cześć!");

};

var sayHello3 = function hello() {      //służy do odniesienia się wewnątrz funkcji tylko. Można wywołać tylko poprzez sayHello3();

    console.log(hello);

    console.log("Siema!");

};