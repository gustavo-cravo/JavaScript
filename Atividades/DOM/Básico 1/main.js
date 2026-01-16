const button = document.getElementById('troca')

    const text = document.getElementById('text')

button.addEventListener('click' , click);

function click(){
    text.textContent= 'Clicou!';
}