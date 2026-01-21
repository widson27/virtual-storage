# 🚀 Martins Tech - Virtual Storage

![GitHub repo size](https://img.shields.io/github/repo-size/widson27/virtual-storage?style=for-the-badge)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

A **Martins Tech** é uma vitrine de e-commerce moderna e responsiva, focada no nicho gamer e tecnológico. O projeto foi desenvolvido para demonstrar o domínio de tecnologias **Front-end Vanilla**, com foco em performance de busca, manipulação dinâmica do DOM e consumo de dados estruturados.



## 🛠️ Tecnologias e Conceitos Aplicados

- **JavaScript ES6+**: Uso intensivo de métodos de array como `.filter()`, `.forEach()` e `.find()`.
- **Manipulação Dinâmica do DOM**: Renderização de interface baseada em estados de dados.
- **Tailwind CSS**: Estilização baseada em utilitários, garantindo um design "Pixel Perfect" e responsivo.
- **Arquitetura de Dados**: Separação de responsabilidades com um banco de dados local (`data.js`) e lógica de negócio (`app.js`).

## ✨ Funcionalidades Principais

* **🔍 Busca Inteligente**: Filtro em tempo real que analisa o nome e a categoria dos produtos enquanto o usuário digita.
* **🏷️ Filtros por Categoria**: Sistema de navegação por botões (Hardware, Periféricos, Áudio, etc.) com atualização dinâmica de estilos (Active State).
* **📱 Responsividade Total**: Layout adaptável para dispositivos móveis, tablets e desktops utilizando Grid e Flexbox.
* **⚡ Performance**: Renderização otimizada para lidar com grandes listas de produtos (20+ itens) sem perda de fluidez.

## 📂 Estrutura do Repositório



```bash
├── index.html          # Estrutura principal com Tailwind via CDN/CLI
├── app.js              # Lógica de renderização, busca e filtros
├── js/
│   └── data.js         # "Database" local com 20 produtos estruturados
└── README.md           # Documentação do projeto
🚀 Como testar localmente
Clone o repositório:

Bash

git clone [https://github.com/widson27/virtual-storage.git](https://github.com/widson27/virtual-storage.git)
Acesse a pasta do projeto:

Bash

cd virtual-storage
Abra o index.html no seu navegador (Dica: utilize a extensão Live Server do VS Code para uma melhor experiência).

📈 Próximos Passos (Roadmap)
[ ] Implementação de Carrinho de Compras com cálculo de subtotal.

[ ] Persistência de dados utilizando LocalStorage.

[ ] Detalhamento de produtos via Modais Dinâmicos.

Desenvolvido por Widson Martins 🎧🕹️
