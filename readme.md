# ✨ Lumina — E-commerce de Literatura Cristã

> *"Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho." — Salmos 119:105*

O **Lumina** é uma loja virtual de livros cristãos criada para ser simples e prática de usar. O nome vem do latim e significa "iluminar" ou "trazer clareza" — uma referência direta à ideia de iluminar o caminho do leitor. Esse conceito guiou todo o projeto, resultando em um visual leve, organizado e em uma navegação sem complicações do catálogo ao checkout.

---

## 🌐 Link do Projeto
👉 **[Acessar o Lumina Ao Vivo](https://lumina.julianarocumback.dev)**

---

## 📸 Demonstração e Telas

### 🏠 Página Principal (Hero)
Apresentação do conceito da loja com destaque para o produto principal (Bíblia), exibindo sua visualização interativa ao lado e link direto para a página do produto.

![Hero Section](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-hero.png)

---

### 📚 Catálogo, Filtros e Busca
Catálogo Inteligente com filtros combinados: barra lateral para busca por título e filtragem por categorias, integrada à ordenação flexível (lançamentos, menor e maior preço). Toda a lógica opera de forma cumulativa, atualizando a listagem de produtos instantaneamente.

![Catálogo e Filtros](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-catalog-search-filter.png)

---

### 🛒 Carrinho de Compras
Painel lateral interativo que permite ajustar quantidades, remover itens e visualizar o subtotal em tempo real. Conta com persistência de dados no `localStorage`, garantindo que os produtos permaneçam salvos durante a navegação.

![Carrinho de Compras](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-cart.png)

---

### 📚 Kits Temáticos (Bundles)
Exibição de conjuntos de livros reunidos por uma mesma temática (como Teologia, Literatura Cristã ou Devocional). Permite visualizar os títulos inclusos no pacote e adicionar o kit completo ao carrinho com apenas um clique.

![Kits Temáticos](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-bundles.png)

---

### 📖 Página do Produto
Exibição detalhada da obra com informações do livro, avaliações dos leitores e ações diretas para adicionar ao carrinho ou salvar na lista de favoritos.

![Página do Produto](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-product-detail.png)

---

### 🛒 Checkout — Itens
Revisão completa dos itens selecionados com ajuste final de quantidades, remoção de produtos e cálculo do subtotal antes do preenchimento dos dados de entrega.

![Checkout Itens](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-checkout-items.png)

---

### 🛒 Checkout — Endereço
Formulário de seleção ou cadastro de endereço de entrega, contando com autopreenchimento dinâmico para usuários autenticados que já possuem endereços salvos no perfil.

![Checkout Endereço](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-checkout-address.png)

---

### 💳 Checkout — Pagamento
Seleção da forma de pagamento (Cartão de Crédito ou PIX) com validação de dados em tempo real e exibição do resumo do valor final do pedido.

![Checkout Pagamento](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-checkout-payment.png)

---

### ✅ Checkout — Confirmação
Tela de encerramento da compra exibindo mensagem de sucesso, número identificador do pedido (*Order ID*) e atalho direto para acompanhamento no painel do usuário.

![Checkout Confirmação](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-checkout-confirmation.png)

---

### 👤 Usuário — Visão Geral
Painel centralizado com o resumo do último pedido efetuado e atalho de acesso rápido aos últimos 5 itens favoritados.

![Visão Geral do Usuário](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-user-overview.png)

---

### 📦 Usuário — Pedidos
Painel para consulta do histórico de compras com busca em tempo real (por código do pedido ou nome do livro) e filtragem dinâmica por status de entrega (*Processando*, *Em transporte*, *Entregue*, *Cancelado*).

![Gestão de Pedidos](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-user-orders.png)

---

### 👤 Usuário — Perfil
Gestão de dados pessoais do usuário (nome, e-mail e WhatsApp) com sincronização via Supabase Auth. Inclui regra de negócio para preenchimento de CPF e Data de Nascimento em campo único (não editáveis após a gravação).

![Perfil do Usuário](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-user-profile.png)

---

### 📍 Usuário — Endereços
Gestão do livro de endereços do usuário, permitindo adicionar ou remover locais de entrega para agilizar futuros checkouts.

![Endereços do Usuário](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-user-addresses.png)

---

### 💳 Usuário — Pagamentos
Gestão de cartões salvos para visualização e remoção de métodos de pagamento, facilitando o fluxo de compra rápida.

![Pagamentos do Usuário](https://gajfmazozjutlxqfvlxl.supabase.co/storage/v1/object/public/photos/github/lumina-user-payments.png)

---

## ✨ Principais Funcionalidades

- 📖 **Hero Interativo:** Apresentação com elemento visual interativo da Bíblia Sagrada.
- 🔍 **Busca & Ordenação:** Pesquisa instantânea por nome e filtros dinâmicos por categorias e ordenação por preço/lançamentos.
- 🎨 **Cromatografia da Fé:** Navegação por coleções curadas visualmente por cores e momentos espirituais.
- 🛒 **Carrinho de Compras Persistente:** Adição/remoção de itens tanto pelo catálogo quanto pela página detalhada do produto, mantendo os dados salvos no navegador.
- 💳 **Checkout Fluido:** Fluxo estilo landing page estruturado em etapas e integrado aos dados do cliente para compra rápida.
- 🔒 **Rotas Protegidas:** Controle de acesso garantindo que áreas restritas (como Checkout e Perfil) só sejam acessadas por usuários autenticados.
- 👤 **Painel do Usuário Completo:**
  - Resumo do último pedido e atalho para os últimos 5 itens favoritados.
  - Histórico de pedidos com campo de pesquisa e filtros por status.
  - Gestão de perfil com regras de imutabilidade de dados sensíveis (CPF e Nascimento), endereços salvos e cartões cadastrados.

---

## 🧠 Decisões Técnicas & Arquitetura

- **Supabase (BaaS):** Utilizado para gestão completa e persistência de dados em tempo real, incluindo autenticação de usuários, catálogo de produtos, endereços, métodos de pagamento e histórico de pedidos.
- **Gerenciamento de Estado Global (Context API):** Implementado para compartilhar dados globais da aplicação (como o carrinho de compras e sessão do usuário) entre diferentes páginas e componentes sem necessidade de *prop drilling*.
- **Persistência com LocalStorage:** Garante que os itens adicionados ao carrinho permaneçam salvos caso o usuário recarregue ou saia da página.
- **Navegação com React Router:** Single Page Application (SPA) com navegação instantânea e *Private Routes* para redirecionar usuários não autenticados que tentarem acessar rotas restritas.

---

## 🛠️ Tecnologias Utilizadas

| Categoria | Tecnologias |
| :--- | :--- |
| **Frontend** | React.js, JavaScript |
| **Estilização** | Tailwind CSS |
| **Backend & Banco de Dados** | Supabase (Database, Auth, Storage) |
| **Roteamento & Estado** | React Router, Context API, LocalStorage |
| **Deploy** | Vercel |

---

## 👤 Desenvolvido por

**Juliana Rocumback**  
*Desenvolvedora Full-Stack*

💼 **LinkedIn:** [linkedin.com/in/julianarocumback](https://linkedin.com/in/julianarocumback)