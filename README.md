# 🏦 Dio Bank API – Node.js + TypeScript

Este projeto foi desenvolvido como parte de um desafio prático da **Digital Innovation One (DIO)** com o objetivo de aplicar boas práticas no desenvolvimento de APIs RESTful modernas utilizando **Node.js** com **TypeScript**.

A proposta vai além do básico: refatorar código, implementar testes unitários, validar dados (como e-mail) e garantir que a aplicação siga os princípios da Clean Code e da arquitetura modular.

---

## 💡 Objetivo do Projeto

O projeto simula uma API de um banco digital – o **Dio Bank** – com operações básicas de gerenciamento de usuários. O foco é aplicar conceitos essenciais do back-end como:

- Criação de rotas REST
- Validação de dados de entrada
- Testes automatizados com Jest
- Separação de responsabilidades entre controllers e serviços

---

## 🔧 Funcionalidades Implementadas

✅ **Criar usuários** com validação de e-mail  
✅ **Listar usuários** cadastrados  
✅ **Deletar usuários** por ID  
✅ **Validação robusta** com Regex para campos sensíveis  
✅ **Testes unitários** utilizando Jest  
✅ Estrutura organizada com **boas práticas de código**

---

## 📁 Estrutura de Pastas

```
dio-bank-api-node-ts/
├── src/
│   ├── controllers/
│   │   └── userController.ts
│   └── main.ts
├── tests/
│   └── user.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
└── README.md
```

---

## 🚀 Como executar o projeto

### Pré-requisitos:
- Node.js instalado
- npm ou yarn instalado

### Passos para rodar:

```bash
# Instale as dependências
npm install

# Inicie o servidor em modo desenvolvimento
npm run dev
```

A API estará rodando localmente em:  
📍 **http://localhost:3000**

---

## 🔍 Rodando os testes

O projeto já vem com testes unitários configurados usando Jest.

Para rodar os testes:

```bash
npm run test
```

Você verá no console o resultado dos testes do controller de usuário, incluindo validação de e-mails.

---

## 📚 Repositório de Referência

Este projeto foi inspirado e aprimorado a partir do repositório oficial da DIO:  
🔗 https://github.com/digitalinnovationone/desafio04-ts

---

## 👨‍💻 Sobre o Desenvolvedor

Sou estudante universitário da área de **Ciência de Dados**, com foco em **desenvolvimento back-end** e práticas modernas de API. Este projeto integra meu portfólio técnico e foi desenvolvido com atenção à qualidade de código, testabilidade e organização.

---

## ✨ Conclusão

Este desafio foi uma excelente oportunidade para consolidar os conhecimentos em **TypeScript com Node.js**, além de praticar:

- Estruturação de APIs limpas
- Uso de middlewares e validações
- Escrita e execução de testes automatizados
- Organização e versionamento com GitHub

---

📫 Fique à vontade para clonar, testar e evoluir esse projeto. Vamos juntos construir soluções mais limpas, escaláveis e eficientes!