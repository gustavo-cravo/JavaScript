// ====================== DADOS ======================
const produtos = [
  { nome: "Arroz Parbolizado 5kg",          preco: 24.90, img: "https://images.unsplash.com/photo-1586201836022-8e7e3f0e0f5a?w=400" },
  { nome: "Feijão Carioca Tipo 1 1kg",      preco:  8.90, img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400" },
  { nome: "Macarrão Espaguete 500g",        preco:  4.80, img: "https://images.unsplash.com/photo-1621998320146-8e628b6e1b3e?w=400" },
  { nome: "Óleo de Soja Liza 900ml",        preco:  7.50, img: "https://images.unsplash.com/photo-1625772299848-361b803ffa25?w=400" },
  { nome: "Leite Integral 1L",              preco:  6.40, img: "https://images.unsplash.com/photo-1550581190-9be93909eeea?w=400" },
  { nome: "Café Pilão Tradicional 500g",    preco: 19.90, img: "https://images.unsplash.com/photo-1559056199-8c995180c8c8?w=400" },
  { nome: "Açúcar Cristal 1kg",             preco:  5.20, img: "https://images.unsplash.com/photo-1617896186219-080b921748f2?w=400" },
  { nome: "Tomate Cereja 200g",             preco:  8.90, img: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=400" },
  { nome: "Batata Doce kg",                 preco:  6.50, img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400" },
  { nome: "Cebola Branca kg",               preco:  7.80, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400" },
];

// ====================== DOM ======================
const inputBusca   = document.getElementById("busca");
const container    = document.getElementById("produtos");
const semResultado = document.getElementById("semResultado");

// ====================== CRIAR CARDS ======================
function criarCards() {
  produtos.forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${prod.img}" alt="${prod.nome}">
      <div class="info">
        <h3 class="nome">${prod.nome}</h3>
        <div class="preco">R$ ${prod.preco.toFixed(2).replace(".", ",")}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

// ====================== FILTRO ======================
function filtrarProdutos() {
  const termo = inputBusca.value.trim().toLowerCase();
  
  const cards = document.querySelectorAll(".card");
  let encontrados = 0;

  cards.forEach(card => {
    const nome = card.querySelector(".nome").textContent.toLowerCase();
    
    if (termo === "" || nome.includes(termo)) {
      card.classList.remove("hidden");
      encontrados++;
    } else {
      card.classList.add("hidden");
    }
  });

  semResultado.style.display = encontrados === 0 ? "block" : "none";
}

// ====================== EVENTO ======================
let timeout;
inputBusca.addEventListener("input", () => {
  clearTimeout(timeout);
  timeout = setTimeout(filtrarProdutos, 180); // pequeno debounce
});

// Inicialização
criarCards();
filtrarProdutos(); // mostra todos no início