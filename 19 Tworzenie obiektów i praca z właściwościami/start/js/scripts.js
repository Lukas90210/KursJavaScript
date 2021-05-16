var person = {
    firstName: 'Tomasz',
    lastName: 'Maszto',
    age: 32
};
person['job'] = 'programista';

delete person.age;

console.log(person);

var person2 = person;

person2.age = 23;