var link = document.querySelector(".link");

// console.log(link.className); //To samo co w 1 lecz jest to stara metooda.

link.classList.add('red', 'green');
link.classList.remove('red');
link.classList.toggle('green');

console.log(link.classList.contains('red')); //sprawdza czy jest klasa i wynikiem jest true lub false. 