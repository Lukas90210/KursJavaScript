var firstName = "Maciej";

var userName;

// if(firstName) {
//     userName = firstName;
// } else {
//    userName = 'Nieznajomy';
// }

userName = firstName ? firstName : 'Nieznajomy'; //Ten sam zapis co powyżej, ale skrócony.

console.log('Witaj, ' + userName);