import { Request, Response } from 'express';

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [];

export function createUser(req: Request, res: Response) {
  const { name, email } = req.body;

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  const user = { id: users.length + 1, name, email };
  users.push(user);
  return res.status(201).json(user);
}

export function deleteUser(req: Request, res: Response) {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  return res.status(200).json({ message: 'Usuário deletado com sucesso' });
}

export function listUsers(req: Request, res: Response) {
  return res.json(users);
}