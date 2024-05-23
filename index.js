



const h1 = document.querySelector('h1');
const button = document.querySelector('button');

let id = setTimeout(tick, 3000);
let counter = 0;

function tick() {
    h1.textContent = ++counter;
    id = setTimeout(tick, 3000);

}

button.addEventListener('click', function () {
    clearTimeout(id)
})


