var person = {
    'Imię': 'Maciej',
    'Nazwisko': 'Kowalski',
    'wiek': '27' 
}

var person2 = {};

for(var key in person) {

    console.log(key + ': ' + person[key]);

}


// for(var key in person) {

//     person2[key] = person[key];

// }

console.log(person2);