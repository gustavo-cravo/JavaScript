const texto = document.getElementById('texto')
const span = document.getElementById('real')

texto.addEventListener('input', function(){
    span.textContent = this.value
})