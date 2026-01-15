const adi = document.getElementById('adicao')
const sub = document.getElementById('subtracao')
const mul = document.getElementById('multiplicacao')
const div = document.getElementById('divisao')

const res = document.getElementById('resposta')

adi.addEventListener('click', () => calcular('adição'));
sub.addEventListener('click', () => calcular('subtração'));
mul.addEventListener('click', () => calcular('multiplicação'));
div.addEventListener('click', () => calcular('divisão'));




function calcular(operacao) {
    const numero1 = Number(document.getElementById('num1').value)
    const numero2 = Number(document.getElementById('num2').value)

    let resultado;

    switch(operacao) {
        case 'adição':
            resultado = numero1 + numero2;
            break;
        case 'subtração':
            resultado = numero1 - numero2;
            break;
        case 'multiplicação':
            resultado = numero1 * numero2;
            break;
        case 'divisão':
            resultado = numero2 !== 0 ? numero1 / numero2 : 'Erro: divisão por zero';
            break;
    }

    res.innerHTML = `<p>O valor da ${operacao} é: ${resultado}</p>`;
}