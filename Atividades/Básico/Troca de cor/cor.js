let cor = window.document.getElementById('color');
cor.addEventListener("input", trocar);

function trocar(){
    document.body.style.backgroundColor = this.value;
}