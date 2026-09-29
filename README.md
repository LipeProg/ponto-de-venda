# Minerva PDV

Projeto acadêmico desenvolvido para a disciplina de Front-end Frameworks.

O Minerva PDV é um sistema de ponto de venda voltado para pequenos comércios, com foco no gerenciamento de produtos e controle de estoque.

## Problema e público

Pequenos comércios precisam de uma forma simples de organizar seus produtos, acompanhar quantidades em estoque e visualizar informações básicas da operação.

O Minerva PDV foi desenvolvido como um protótipo de sistema administrativo simples para esse tipo de uso.

## Integrante

- Luis Felipe Ferreira de Oliveira

## Contribuição

Luis Felipe Ferreira de Oliveira:
- criação da estrutura do projeto;
- configuração do React Router;
- desenvolvimento das páginas;
- criação da listagem de produtos;
- implementação da busca;
- desenvolvimento do formulário de cadastro;
- validação dos campos;
- persistência com localStorage;
- exclusão de produtos;
- desenvolvimento da página de estoque;
- desenvolvimento do dashboard;
- organização dos componentes;
- desenvolvimento e organização do layout e estilos.

## Funcionalidades

Atualmente o sistema possui:

- Dashboard com indicadores;
- listagem de produtos;
- busca de produtos por nome;
- cadastro de novos produtos;
- validação dos campos do formulário;
- exclusão de produtos;
- persistência das alterações no localStorage;
- visualização do estoque;
- classificação de produtos por situação de estoque;
- mensagens condicionais de erro, sucesso e lista vazia;
- navegação entre páginas usando React Router.

## Rotas

| Rota | Página | Função |
| --- | --- | --- |
| `/` | Dashboard | Exibe informações gerais do sistema |
| `/produtos` | Produtos | Lista, busca e exclui produtos |
| `/produtos/novo-produto` | Novo Produto | Cadastro de novos produtos |
| `/estoque` | Estoque | Exibe as quantidades e situação do estoque |

## Tecnologias

- React
- JavaScript
- Vite
- React Router
- HTML
- CSS
- localStorage
- Git
- GitHub

## Como executar

É necessário ter o Node.js instalado.

Clone o repositório:

```bash
git clone https://github.com/LipeProg/ponto-de-venda.git