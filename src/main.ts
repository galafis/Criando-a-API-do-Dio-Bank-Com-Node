import express from 'express';
import { createUser, deleteUser, listUsers } from './controllers/userController';

const app = express();
app.use(express.json());

app.post('/users', createUser);
app.delete('/users/:id', deleteUser);
app.get('/users', listUsers);

app.listen(3000, () => console.log('🚀 API Dio Bank rodando na porta 3000'));