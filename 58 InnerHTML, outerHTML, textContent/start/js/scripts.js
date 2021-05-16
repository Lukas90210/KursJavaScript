var container = document.querySelector("#container"),
    para = document.querySelector("#container p");

    // console.log(container.innerHTML);
    // console.log(para.textContent);

    para.innerHTML = "<b>nowy tekst</b>"; //zamiana elementu w wybranym elemencie.
    // para.textContent = 'nowy tekst';

    console.log(container.outerHTML);
    container.outerHTML = "<div id='container'><p>Treść</p></div>";

    container.id = 'container2';

    document.body.appendChild(container);
