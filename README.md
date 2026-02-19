# Dio Bank API – Node.js + TypeScript

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
[![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2671E7?style=for-the-badge&logo=githubactions&logoColor=white)](https://docs.github.com/en/actions)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Arquitetura da API | API Architecture

```mermaid
flowchart TD
    Client([Client\nHTTP Request]) -->|POST / GET / DELETE| Router

    subgraph API["Node.js + TypeScript API"]
        Router["Router\n/users\n/users/:id"] --> Middleware
        Middleware["Middleware\nValidacao de Email\nAutenticacao"] --> Controller
        Controller["UserController\ncreateUser\nlistUsers\ndeleteUser"] --> Service
        Service["UserService\nBusiness Logic\nValidations"] --> Data
        Data["In-Memory Store\nusers: User[]"]
    end

    Data -->|User[]| Service
    Service -->|UserDTO| Controller
    Controller -->|JSON Response| Client

    subgraph Testing["Test Layer"]
        Jest["Jest\nUnit Tests\nUserService.spec.ts\nUserController.spec.ts"]
    end

    Service -.->|tested by| Jest

    style API fill:#1e3a5f,color:#fff
    style Testing fill:#3d1e5f,color:#fff
    style Client fill:#2d6a4f,color:#fff
```

---

## Portugues

Este projeto e parte de um desafio da **DIO (Digital Innovation One)** para construcao de uma API com boas praticas, validacao de dados e testes unitarios utilizando Node.js e TypeScript.

### Funcionalidades

- Criar usuarios com validacao de email
- Listar usuarios cadastrados
- Deletar usuario por ID
- Testes unitarios com Jest
- Validacao robusta de dados de entrada

### Endpoints

| Metodo | Rota | Descricao |
|--------|------|-----------|
| `POST` | `/users` | Criar novo usuario |
| `GET` | `/users` | Listar todos os usuarios |
| `DELETE` | `/users/:id` | Deletar usuario por ID |

### Como Executar

1. Clone o repositorio:
   ```bash
   git clone https://github.com/galafis/Criando-a-API-do-Dio-Bank-Com-Node.git
   cd Criando-a-API-do-Dio-Bank-Com-Node
   ```

2. Instale as dependencias:
   ```bash
   npm install
   ```

3. Inicie em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

4. A API estara disponivel em `http://localhost:3000`

### Testes

```bash
npm run test
```

### Exemplo de Uso

```bash
# Criar usuario
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Gabriel Lafis", "email": "gabriel@galafis.dev"}'

# Listar usuarios
curl -X GET http://localhost:3000/users

# Deletar usuario
curl -X DELETE http://localhost:3000/users/1
```

### Estrutura do Projeto

```
src/
 ├── index.ts                # Entry point
 ├── routes/
 │   └── userRoutes.ts       # Definicao de rotas
 ├── controllers/
 │   └── UserController.ts   # Logica de controle
 ├── services/
 │   └── UserService.ts      # Regras de negocio
 ├── models/
 │   └── User.ts             # Interface do modelo
 └── middlewares/
     └── validation.ts       # Validacao de dados
tests/
 ├── UserService.spec.ts
 └── UserController.spec.ts
```

---

## English

This project is part of a **DIO (Digital Innovation One)** challenge to build an API with best practices, data validation, and unit tests using Node.js and TypeScript.

### Features

- Create users with email validation
- List registered users
- Delete user by ID
- Unit tests with Jest
- Robust input data validation

### Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/users` | Create new user |
| `GET` | `/users` | List all users |
| `DELETE` | `/users/:id` | Delete user by ID |

### How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/galafis/Criando-a-API-do-Dio-Bank-Com-Node.git
   cd Criando-a-API-do-Dio-Bank-Com-Node
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start in development mode:
   ```bash
   npm run dev
   ```

4. The API will be available at `http://localhost:3000`

### Tests

```bash
npm run test
```

### Usage Example

```bash
# Create user
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "Gabriel Lafis", "email": "gabriel@galafis.dev"}'

# List users
curl -X GET http://localhost:3000/users

# Delete user
curl -X DELETE http://localhost:3000/users/1
```

### Project Structure

```
src/
 ├── index.ts                # Entry point
 ├── routes/
 │   └── userRoutes.ts       # Route definitions
 ├── controllers/
 │   └── UserController.ts   # Request handling
 ├── services/
 │   └── UserService.ts      # Business rules
 ├── models/
 │   └── User.ts             # Model interface
 └── middlewares/
     └── validation.ts       # Data validation
tests/
 ├── UserService.spec.ts
 └── UserController.spec.ts
```

---

## Tecnologias | Tech Stack

- [Node.js](https://nodejs.org/) — Runtime JavaScript
- [TypeScript](https://www.typescriptlang.org/) — Static typing
- [Express](https://expressjs.com/) — Web framework
- [Jest](https://jestjs.io/) — Unit testing
- [uuid](https://www.npmjs.com/package/uuid) — ID generation
- [Nodemon](https://www.npmjs.com/package/nodemon) — Auto-reload in development

---

## Sobre o Autor | About the Author

**Gabriel Demetrios Lafis** — Cientista de Dados com foco em desenvolvimento back-end moderno e APIs bem testadas.

Inspirado no repositorio oficial da DIO: [desafio04-ts](https://github.com/digitalinnovationone/desafio04-ts)

[![GitHub](https://img.shields.io/badge/GitHub-galafis-181717?style=flat&logo=github)](https://github.com/galafis)

---

## Licenca | License

Este projeto esta sob a licenca MIT. | This project is licensed under the MIT License.

Veja o arquivo [LICENSE](LICENSE) para mais detalhes. | See the [LICENSE](LICENSE) file for details.
