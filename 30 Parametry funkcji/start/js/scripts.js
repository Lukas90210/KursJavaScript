function square(num) {

    return num * num;

}

console.log(square(2));

//

function sum(a, b) {

    return a + b;

}

// 

var firstName = "Tomasz";

function sayHello(text) {

    return 'Witaj' + ' ' + text;
}
console.log(sayHello(firstName));
//

var person = {
    firstName: 'Tomasz',
    lastName:  'Gała'
};

function sayHello2(obj) {

    return 'Witaj, ' + obj.firstName + ' ' + obj.lastName;

}

console.log(sayHello2(person));