// Traccia 1
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;

}

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let p = document.querySelectorAll('p');


btn1.addEventListener('click', () => {
    p.forEach(p => {
        p.style.color = randomColor();
    })
});

btn2.addEventListener('click', () => {
    p.forEach(p => {
        p.classList.toggle('grassetto');
    })
});

btn3.addEventListener('click', () => {
    p.forEach(p => {
        p.classList.toggle('d-none');
    })
});

// Traccia 2

let btn4 = document.querySelector('#btn4');
let wrapper = document.querySelector('#zonaArticoli');
let titolo = document.querySelector('#titolo');
let paragrafo = document.querySelector('#paragrafo');
let date = new Date();
let formatDate = date.toLocaleDateString()


btn4.addEventListener('click', () => {
    let articolo = document.createElement('article')
    articolo.classList.add('border', 'border-primary', 'bg-primary');

    let date = new Date();
    let formatDate = date.toLocaleDateString()
    if (titolo.value!==""&&paragrafo.value!=="") {
        articolo.innerHTML = `<h2>${titolo.value}</h2>
        <p>${paragrafo.value}</p>
        <p>Pubblicato il ${formatDate}</p>`;
        console.log(articolo);
        wrapper.appendChild(articolo);
        titolo.value="";
        paragrafo.value="";
        
    } else {
        alert("Non Hai inserito il titolo e/o il paragrafo")
    }

});

