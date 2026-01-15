const numero = document.getElementById('numero');
const consulta = document.getElementById('verificar');
const tabuada = document.getElementById('tabuada');

consulta.addEventListener('click', consultar);

function consultar(){
    const valor = numero.value
    tabuada.innerHTML = "";

    for(i = 0; i <= 10; i++) {
        tabuada.innerHTML += `<p>${valor} X ${i} = ${valor * i}</p> `
    }
}