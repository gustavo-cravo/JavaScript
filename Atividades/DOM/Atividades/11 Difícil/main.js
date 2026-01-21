// ====================== DADOS ======================
const produtos = [
  { nome: "Arroz 5kg",        preco: 24.90 },
  { nome: "Feijão carioca 1kg", preco:  8.50 },
  { nome: "Macarrão espaguete", preco:  5.30 },
  { nome: "Óleo de soja 900ml", preco:  7.80 },
  { nome: "Leite 1L",           preco:  6.20 },
  { nome: "Café 500g",          preco: 18.90 },
  { nome: "Açúcar 1kg",         preco:  5.40 },
  { nome: "Tomate kg",          preco:  9.90 },
];

// ====================== FUNÇÕES ======================
function criarItem(produto, index) {
  const div = document.createElement("div");
  div.className = "item";
  div.dataset.index = index;

  div.innerHTML = `
    <div class="nome">${produto.nome}</div>
    <div class="qtd-container">
      <button data-acao="menos">-</button>
      <span class="quantidade">1</span>
      <button data-acao="mais">+</button>
    </div>
    <div class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
    <div class="subtotal">R$ ${produto.preco.toFixed(2).replace('.', ',')}</div>
  `;

  return div;
}

function atualizarSubtotal(itemElement) {
  const index = itemElement.dataset.index;
  const produto = produtos[index];
  
  const qtd = Number(itemElement.querySelector(".quantidade").textContent);
  const subtotal = qtd * produto.preco;
  
  itemElement.querySelector(".subtotal").textContent = 
    "R$ " + subtotal.toFixed(2).replace(".", ",");
  
  return subtotal;
}

function atualizarTotal() {
  let total = 0;
  document.querySelectorAll(".item").forEach(item => {
    total += atualizarSubtotal(item);
  });
  
  document.getElementById("total").textContent = 
    "R$ " + total.toFixed(2).replace(".", ",");
}

// ====================== EVENT DELEGATION ======================
document.addEventListener("click", e => {
  const botao = e.target.closest("button[data-acao]");
  if (!botao) return;

  const acao = botao.dataset.acao;
  const item = botao.closest(".item");
  const qtdEl = item.querySelector(".quantidade");
  let qtd = Number(qtdEl.textContent);

  if (acao === "mais") {
    qtd++;
  } else if (acao === "menos") {
    if (qtd > 0) qtd--;
  }

  qtdEl.textContent = qtd;
  atualizarTotal();
});

// ====================== INICIALIZAÇÃO ======================
const lista = document.getElementById("lista");

produtos.forEach((produto, i) => {
  const itemEl = criarItem(produto, i);
  lista.appendChild(itemEl);
});

// Calcula total inicial
atualizarTotal();