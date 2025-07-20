# 📘 Pokédex DevQuest

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![PokéAPI](https://img.shields.io/badge/API-PokéAPI-red?style=for-the-badge)

Uma aplicação web feita com **React** que consome a [PokéAPI](https://pokeapi.co/) para exibir informações detalhadas dos Pokémons. Desenvolvida como desafio técnico da **DevQuest**, com foco em responsividade, design inspirado no estilo 2D/anime da franquia Pokémon e uso de boas práticas com **styled-components**.

---

## 🚀 Funcionalidades

- 🔎 Lista de Pokémons com imagem e nome
- 📄 Página de detalhes com descrições e informações adicionais
- 🎨 Estilo visual inspirado no universo Pokémon
- 🌗 Tema fixo estilizado (claro/anime)
- 📱 Layout responsivo para dispositivos móveis
- 🍔 Menu hambúrguer em telas pequenas
- ⚙️ Componentização com `styled-components`

---

## 📷 Demonstração


### 🏠 Página Inicial
![Home da Pokédex](./src/assets/images/homepokedex.png)

### 📱 Cards Responsivos no Mobile
![Cards responsivos](./src/assets/images/mobilepokedex.png)


---

## 🛠️ Tecnologias utilizadas

- React
- React Router DOM
- Styled-components
- JavaScript (ES6+)
- PokéAPI
- HTML5 e CSS3

---

## 📂 Estrutura de pastas

```bash
src/
├── assets/              # Imagens e ícones
├── components/          # Componentes reutilizáveis
│   ├── Header/
│   ├── Footer/
│   ├── Hero/
│   ├── PokemonCard/
│   └── CardsGrid/
├── pages/               # Páginas principais
│   └── Home.jsx
├── App.js               # Componente principal
└── index.js             # Ponto de entrada