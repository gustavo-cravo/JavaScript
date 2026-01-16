// 1. Selecionar
const btn = document.querySelector('#enviar')
const todosCards = document.querySelectorAll('.card')

// 2. Criar + adicionar conteúdo
const novoDiv = document.createElement('div')
novoDiv.textContent = 'Olá mundo!'
novoDiv.classList.add('alerta', 'sucesso')

// 3. Adicionar no DOM (maneiras modernas)
container.append(novoDiv)           // no final
container.prepend(novoDiv)          // no começo
referencia.before(novoDiv)          // antes do elemento
referencia.after(novoDiv)           // depois do elemento

// 4. Eventos modernos
btn.addEventListener('click', (e) => {
  e.preventDefault() // muito comum em forms
  // faz coisas...
})

// 5. Delegação (super útil!)
document.body.addEventListener('click', e => {
  if (e.target.matches('.botao-excluir')) {
    e.target.closest('.item').remove()
  }
})

// 6. Atualizar várias coisas de forma eficiente
const fragment = document.createDocumentFragment()

for(let i = 0; i < 100; i++) {
  const item = document.createElement('li')
  item.textContent = `Item ${i}`
  fragment.append(item)
}

lista.append(fragment) // apenas 1 reflow!