# 🚀 Martins Tech — E-commerce Front-End

![GitHub repo size](https://img.shields.io/github/repo-size/widson27/virtual-storage?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

🔗 **Demo online:**  
👉 https://virtual-storage-two.vercel.app/

---

## 📌 Sobre o Projeto

**Martins Tech** é uma aplicação de e-commerce desenvolvida com **HTML, Tailwind CSS e JavaScript puro**, simulando uma loja de hardware, periféricos e consoles gamer.

O objetivo do projeto é demonstrar **domínio de lógica front-end**, manipulação de estado no navegador e foco em **experiência do usuário (UX)**, sem o uso de frameworks.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** — Estrutura semântica
- **Tailwind CSS** — Estilização responsiva e Dark Mode nativo
- **JavaScript (ES6+)**
  - Manipulação do DOM
  - Gerenciamento de estado
  - Eventos e animações
- **LocalStorage API** — Persistência do carrinho
- **Vercel** — Deploy da aplicação

---

## ✨ Funcionalidades

- 🛒 **Carrinho lateral (Drawer)**
  - Adição e remoção de produtos
  - Cálculo automático do valor total
  - Persistência dos itens mesmo após recarregar a página

- 🔍 **Busca inteligente**
  - Pesquisa por nome ou categoria em tempo real

- 🗂️ **Filtro por categorias**
  - Periféricos, Hardware, Áudio, Consoles e mais

- 🔔 **Sistema de Toasts**
  - Feedback visual ao adicionar produtos ao carrinho

- 🎞️ **Carrossel de banners**
  - Navegação automática e manual
  - Integração com filtros da vitrine

- 🌙 **Dark Mode automático**
  - Baseado nas preferências do sistema

- 📱 **Layout Responsivo**
  - Mobile, tablet e desktop

---

## 🧠 Conceitos Aplicados

- Manipulação de arrays (`map`, `filter`, `reduce`, `find`, `splice`)
- Separação de responsabilidades (dados, UI e lógica)
- Persistência de estado no front-end
- UX focado em feedback imediato
- Componentização dinâmica via JavaScript

---

## 📂 Estrutura do Projeto

```bash
├── index.html
├── js/
│   ├── app.js      # Lógica principal da aplicação
│   └── data.js     # Base de dados simulada (produtos)
├── README.md

▶️ Como Executar Localmente
# Clone o repositório
git clone https://github.com/widson27/virtual-storage.git

# Acesse a pasta do projeto
cd virtual-storage

# Abra o index.html
# (recomendado usar Live Server no VS Code)

📈 Roadmap (Próximas Evoluções)

 Controle de quantidade por produto no carrinho

 Toggle manual de Dark / Light Mode

 Página de Checkout com formulário e validação

 Integração com API fake (JSON Server)

 Refatoração para arquitetura baseada em módulos

 Autor

Desenvolvido por Widson Martins
💼 Desenvolvedor Front-End em formação
📍 Brasil