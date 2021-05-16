var list = document.getElementById("list");

var dc = document.createDocumentFragment();

for(var i = 0; i <= 5; i++) {

    var li = document.createElement('li');

    li.appendChild(document.createTextNode('Nowy element listy' + i ));

    dc.appendChild(li);

}

list.appendChild(dc);