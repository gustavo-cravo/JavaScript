const button = document.getElementById('adi');
const lista = document.getElementById('lista');
const texto = document.getElementById('texto');

let contador = 0;
button.addEventListener('click', function(event){

    if (texto.value.trim() === "") {
    event.preventDefault();
    window.alert("O campo precisa ser preenchido!");

  }else{
    const tarefa = document.createElement('li');
    tarefa.id = `li${contador}`;
    tarefa.className = `nodone`;

    tarefa.textContent = texto.value;
    lista.appendChild(tarefa);
    contador ++;
    texto.value = "";
  }
})

lista.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
    event.target.classList.toggle("nodone");
  }
});
