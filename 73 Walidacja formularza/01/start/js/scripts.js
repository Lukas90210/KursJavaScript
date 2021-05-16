(function() {

var form = document.querySelector("#myForm"),
    fields = form.querySelectorAll("[data-error]");

//? Zapobiega wysłaniu formularza na serwer.
form.addEventListener("submit", function(e) {

    e.preventDefault();

    var errors = [];

//? wyświetla komunikat data-erroe z html
    for(var i = 0; i < fields.length; i++) {

        var field = fields[i];

        if(field.type === "text") {
            if(field.value === "") {

                errors.push(field.dataset.error)        //?(field.dataset.error) to odwołanie się do data-error w html.

            } 
        }else if(field.type === "email") {              //?bez wpisania @ w mailo nie przejdziemy dalej 

                if(field.value.indexOf("@") === -1) {

                    errors.push(field.dataset.error);

                }
            }else if(field.type === "select-one") {

                if(field.value === "") {

                    errors.push(field.dataset.error)       
    
                } 
            }else if(field.type === "textarea") {

                if(field.value.length < 3) {

                    errors.push(field.dataset.error)      
    
                } 
            }
        
    }

    console.log(errors);

}, false);

})();