// Selecionando os elementos corretamente
const btnRed = document.querySelector('.red');
const btnGreen = document.querySelector('.green');
const btnBlue = document.querySelector('.blue');
const quadrado = document.querySelector('.cor');

// Adicionando os escutadores de clique
btnRed.addEventListener('click', clickRed);
btnGreen.addEventListener('click', clickGreen);
btnBlue.addEventListener('click', clickBlue);

function clickRed() {
    quadrado.style.backgroundColor = ''; 
    quadrado.className = 'cor red';
}

function clickGreen() {
    quadrado.style.backgroundColor = '';
    quadrado.className = 'cor green';
}

function clickBlue() {
    quadrado.style.backgroundColor = '';
    // No seu CSS a classe chama-se 'yellow', apesar do botão ser blue
    quadrado.className = 'cor blue'; 
}