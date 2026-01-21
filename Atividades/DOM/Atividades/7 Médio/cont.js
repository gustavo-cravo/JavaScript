
let valor = 0;

const num = document.getElementById('num');

const adi = window.document.getElementById('adicao').addEventListener('click', clicarAdicao);

const sub = window.document.getElementById('subtracao').addEventListener('click', clicarSubtracao);

const res = window.document.getElementById('reset').addEventListener('click', clicarReset);

function clicarAdicao(){
    valor++;
    num.innerHTML = `<p>Valor: ${valor}</p>`;
}

function clicarSubtracao(){
    valor--;
    num.innerHTML = `<p>Valor: ${valor}</p>`;
}

function clicarReset(){
    valor = 0;
    num.innerHTML = `<p>Valor: ${valor}</p>`;
}