const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const senha = document.querySelector('#senha');
const botao = document.querySelector('#btnEnviar');

function validarFormulario() {
  if (
    nome.value.trim() !== '' &&
    email.value.trim() !== '' &&
    senha.value.trim() !== ''
  ) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

// escuta digitação em TODOS os campos
nome.addEventListener('input', validarFormulario);
email.addEventListener('input', validarFormulario);
senha.addEventListener('input', validarFormulario);
