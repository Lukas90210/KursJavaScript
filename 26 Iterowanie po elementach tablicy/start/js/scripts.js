var numbers = [2, 3, 4, 5, 28, 9],
    text = "Wylosowane liczby to: "

var arrLength = numbers.length;

for (var i = 0; i < numbers.length; i++) {

    text += numbers[i];

    if(i !== arrLength -1) {
        text += ', ';
    }
}
console.log(text);