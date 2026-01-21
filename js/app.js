import { produtos } from "./data.js";
const listaProdutos = document.getElementById("lista-produtos");
const vitrine = document.getElementById("vitrine");
const campoBusca = document.getElementById("campo-busca");
const filtro = document.getElementById("filtros");

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
                    <button class="bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-sky-500 dark:hover:bg-sky-500 dark:hover:text-white transition-colors">
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






renderizarProdutos(produtos);
