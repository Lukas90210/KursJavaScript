var arr = [32, 11, 2, 0, 45, 99, 3, 5];

console.log(arr);

var half = arr.slice(-4, 6);    //wycina kawałek, wyświetlając podaną ilość.

// console.log(half);

// console.log(arr.join(', '));    //łączy i zamienia w stringi 

// console.log(arr.indexOf(0) !== -1);    //szuka elementu

// console.log(arr.concat(half));      //łączy tablice

arr.forEach(function(value, index, array) {     //wykonuje funkcje dla każdego z osobna: wartość, na jakim miejscu się znajduje oraz tablica

    // console.log(value, index);

});

var gt10 = arr.filter(function(value) {     //wyświetla elementu powyżej podanej wartości 

    return value > 10;

});

// console.log(gt10);

var negative = arr.map(function(value) {        //zamienia wartości na negatywne

    return value * -1;

});

// console.log(negative);