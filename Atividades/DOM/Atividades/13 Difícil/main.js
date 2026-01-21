// =============================================
// Função auxiliar — cria um item de lista
// =============================================
function criarItem(numero) {
  const li = document.createElement("li");
  li.className = "item";
  li.textContent = `Produto #${numero.toString().padStart(3, "0")} — Arroz Integral 5kg`;
  return li;
}

// =============================================
// Método 1: Append um por um (lento em listas grandes)
// =============================================
document.getElementById("btn-sem-fragment").addEventListener("click", () => {
  performance.mark("inicio-sem");

  const lista = document.getElementById("lista");
  lista.innerHTML = ""; // limpa

  for (let i = 1; i <= 100; i++) {
    const item = criarItem(i);
    lista.appendChild(item);           // ← reflow a cada iteração
  }

  performance.mark("fim-sem");
  const medida = performance.measure("sem-fragment", "inicio-sem", "fim-sem");

  document.getElementById("stats").textContent = 
    `Sem DocumentFragment: ${medida.duration.toFixed(2)} ms`;
});

// =============================================
// Método 2: DocumentFragment (muito mais rápido)
// =============================================
document.getElementById("btn-com-fragment").addEventListener("click", () => {
  performance.mark("inicio-com");

  const lista = document.getElementById("lista");
  lista.innerHTML = ""; // limpa

  // Cria um fragmento leve (não está no DOM ainda)
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 100; i++) {
    const item = criarItem(i);
    fragment.appendChild(item);        // ← adiciona no fragment, sem reflow
  }

  // Só agora insere tudo de uma vez no DOM real
  lista.appendChild(fragment);

  performance.mark("fim-com");
  const medida = performance.measure("com-fragment", "inicio-com", "fim-com");

  document.getElementById("stats").textContent = 
    `Com DocumentFragment: ${medida.duration.toFixed(2)} ms`;
});