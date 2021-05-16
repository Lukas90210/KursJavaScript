var number = 4,
    word = "";

// if(number === 1) {
//     word = 'jeden';
// } else if(number === 2) {
//     word = 'dwa';
// } else if(number === 3) {
//     word = 'trzy';
// }else {
//     word = 'Wartość nieznana';
// }

switch(number) {    //breeak jest konieczny, inaczej case zostanie pominięte do kolejnego.
    case 1: 
        word = 'jeden';
        break;
    case 2: 
        word = 'dwa';
        break;   
    case 3: 
        word = 'jeden';
        break; 
    default:
        word = 'Wartość nieznana';
}

console.log('Wartość to ' + word + '.')