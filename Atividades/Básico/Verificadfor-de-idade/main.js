const idade = document.getElementById('idade')
const button = document.getElementById('confirmar')

button.addEventListener('click', verificar);

function verificar() {
    if(idade.value < 18){
        window.alert('Você é menor de idade.!');
    } else{
        window.alert('Você é maior de idade!')
    }
}