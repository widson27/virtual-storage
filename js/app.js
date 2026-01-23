import { produtos } from "./data.js";
const listaProdutos = document.getElementById("lista-produtos");
const vitrine = document.getElementById("vitrine");
const campoBusca = document.getElementById("campo-busca");
const filtro = document.getElementById("filtros");
const contadorCarrinho = document.getElementById("carrinho-count");
const botaoCarrinho = document.getElementById("botao-carrinho");
const carrinhoLateral = document.getElementById("carrinho-lateral");
const carrinhoOverlay = document.getElementById("carrinho-overlay");
const fecharCarrinho = document.getElementById("fechar-carrinho");
const listaItensCarrinho = document.getElementById("carrinho-itens");
const precoTotalCarrinho = document.getElementById("carrinho-total");

function toggleCarrinho() {
    carrinhoLateral.classList.toggle("translate-x-full");
    carrinhoOverlay.classList.toggle("hidden");
}



let carrinho = [];

const classeAtivo = "px-4 py-1.5 rounded-full bg-sky-500 text-white text-sm font-medium transition-colors";
const classeInativo = "px-4 py-1.5 rounded-full bg-zinc-200 dark:bg-zinc-800 text-sm font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors";

function renderizarProdutos(produtosParaExibir) {
    listaProdutos.innerHTML = "";
    produtosParaExibir.forEach(produto => {
        const li = document.createElement('li');

        li.className = "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 group";

        li.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                <span class="absolute top-2 right-2 bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded">
                    ${produto.categoria.toUpperCase()}
                </span>
            </div>
            <div class="p-4">
                <h3 class="font-bold text-lg mb-2 group-hover:text-sky-500 transition-colors">${produto.nome}</h3>
                <p class="text-zinc-500 dark:text-zinc-400 text-sm mb-4 line-clamp-2">${produto.descricao}</p>
                <div class="flex items-center justify-between">
                    <span class="text-xl font-extrabold text-sky-500">
                        ${produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                    </span>
                    <button data-id="${produto.id}" class="btn-comprar bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-sky-500 dark:hover:bg-sky-500 dark:hover:text-white transition-colors">
                        Comprar
                    </button>
                </div>
            </div>
        `;
        listaProdutos.appendChild(li);
    });
}

campoBusca.addEventListener('input', (e) => {
    const termoBusca = e.target.value.toLowerCase();

    const produtosFiltrados = produtos.filter(produto => {
        return produto.nome.toLowerCase().includes(termoBusca) || produto.categoria.toLowerCase().includes(termoBusca);
    });

    renderizarProdutos(produtosFiltrados);
});

const botoesFiltro = filtro.querySelectorAll('button');

function atualizarEstiloBotao(botaoClicado) {
    botoesFiltro.forEach(btn => btn.className = classeInativo);

    botaoClicado.className = classeAtivo;
}


botoesFiltro.forEach(botao => {
    botao.addEventListener('click', () => {
        const categoriaSelecionada = botao.getAttribute('data-categoria');

        if (categoriaSelecionada === 'todos') {
            renderizarProdutos(produtos);
        } else {
            const filtrados = produtos.filter(p => p.categoria === categoriaSelecionada);
            renderizarProdutos(filtrados);
        }

        atualizarEstiloBotao(botao);
    });
});


listaProdutos.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-comprar')) {
        const idProduto = parseInt(e.target.getAttribute('data-id'));
        adicionarAoCarrinho(idProduto);
    }
});

function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);

    if (produto) {
        carrinho.push(produto);
        atualizarCarrinhoUi();

        console.log(`Adicionado: ${produto.nome}`);
    }
}

function atualizarCarrinhoUi() {
    const totalItens = carrinho.length;
    contadorCarrinho.innerText = totalItens;
    contadorCarrinho.classList.toggle('hidden', totalItens === 0);

    listaItensCarrinho.innerHTML = "";
    carrinho.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "flex gap-4 items-center bg-zinc-50 dark:bg-zinc-900 p-3 rounded-lg border border-zinc-200 dark:border-zinc-800";
        li.innerHTML = `
            <img src="${item.imagem}" class="w-16 h-16 object-cover rounded-md">
            <div class="flex-grow">
                <h4 class="text-sm font-bold line-clamp-1">${item.nome}</h4>
                <p class="text-sky-500 font-bold">${item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>
            <button onclick="removerDoCarrinho(${index})" class="text-zinc-400 hover:text-red-500 transition-colors">✕</button>
        `;
        listaItensCarrinho.appendChild(li);
    });

    const total = carrinho.reduce((acc, p) => acc + p.preco, 0);
    precoTotalCarrinho.innerText = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

window.removerDoCarrinho = (index) => {
    carrinho.splice(index, 1);
    atualizarCarrinhoUi();
}


botaoCarrinho.addEventListener('click', toggleCarrinho);
fecharCarrinho.addEventListener('click', toggleCarrinho);
carrinhoOverlay.addEventListener('click', toggleCarrinho);




renderizarProdutos(produtos);
