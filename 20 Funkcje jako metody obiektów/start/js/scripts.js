var person = {
    firstName: 'Tomasz',
    lastName: 'Maszto',
    sayHello: function() {
        console.log('Cześć, mam na imię ' + this.firstName); //this oznacza to samo co person.firstName tylko, że jest uniwersalne. 
                                                             //Czyli jak zmienię nazwę zmiennej person to funkcja zadziała prawidłowo.
                                                             //Odwoływuje sie do zmiennej.
    },
    setFirstName: function(firstName) {     
        this.firstName = firstName;     //Zmiana imienia person. setFirstName("noweImię")
    }
};
