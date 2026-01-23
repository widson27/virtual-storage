# 🚀 Martins Tech - E-commerce Experience

![GitHub repo size](https://img.shields.io/github/repo-size/widson27/virtual-storage?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

A **Martins Tech** é uma aplicação de e-commerce de alto desempenho, focada na experiência do usuário (UX) e em conceitos avançados de manipulação de dados no Front-end. O projeto simula o fluxo completo de compra de uma loja de hardware e periféricos gamer.



## 🛠️ Tecnologias e Conceitos de Engenharia

Este projeto foi construído utilizando **Vanilla JavaScript** para demonstrar o domínio da linguagem antes de migrar para frameworks como React ou Vue:

- **Persistência de Estado**: Uso da **Web Storage API (LocalStorage)** para manter o carrinho do usuário ativo mesmo após o fechamento do navegador.
- **Componentização via DOM**: Renderização dinâmica de componentes (Cards, Carrinho Lateral e Toasts) baseada em objetos JSON.
- **Gerenciamento de Fluxo**: Implementação de lógica de adição, remoção e cálculo total com métodos de array (`filter`, `map`, `reduce`, `find`, `splice`).
- **UX Reativa**: Notificações assíncronas (Toasts) para feedback instantâneo de ações.
- **Arquitetura CSS-in-HTML**: Uso de **Tailwind CSS** com foco em design responsivo (Mobile-First) e modo escuro nativo.

## ✨ Funcionalidades Avançadas

* **🛒 Carrinho Lateral (Drawer)**: Interface deslizante para gerenciamento de itens com visualização de preço total e remoção individual.
* **💾 Memória Local**: O carrinho "sobrevive" ao refresh da página, garantindo uma taxa de conversão simulada mais alta.
* **🔔 Sistema de Toasts**: Notificações animadas que confirmam a adição de produtos sem interromper a navegação.
* **🔍 Busca Transversal**: Filtro inteligente que busca simultaneamente em nomes e categorias.
* **📱 Interface Adaptativa**: Layout otimizado para todos os tamanhos de tela, do smartphone ao monitor ultra-wide.

## 📂 Estrutura do Projeto

```bash
├── index.html
├── app.js
├── js/
│   └── data.js
└── README.md

🚀 Como Executar
Clone o repositório:

Bash
git clone [https://github.com/widson27/virtual-storage.git](https://github.com/widson27/virtual-storage.git)
Acesse a pasta e abra o index.html (Recomendado: Live Server do VS Code).

📈 Roadmap de Evolução
[x] Implementação de Carrinho Lateral.

[x] Persistência com LocalStorage.

[x] Notificações Toast de feedback.

[ ] Implementação de Dark/Light mode toggle manual.

[ ] Página de Checkout com validação de formulário.

Desenvolvido com ☕ e código por Widson Martins