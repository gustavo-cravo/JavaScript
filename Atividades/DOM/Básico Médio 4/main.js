const button = document.getElementById('adi');
const lista = document.getElementById('lista');
const texto = document.getElementById('texto');

button.addEventListener('click', function(){
    if (texto.value.trim() === "") {
    button.preventDefault();
    window.alert("O campo precisa ser preenchido!");
  }else{
    const tarefa = document.createElement('li');
    lista.appendChild(tarefa);
    tarefa.textContent = texto.value;
    texto.value = "";
  }
})