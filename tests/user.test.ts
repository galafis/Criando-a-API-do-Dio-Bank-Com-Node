import { createUser, deleteUser } from '../src/controllers/userController';
import { Request, Response } from 'express';

const mockResponse = (): Response => {
  const res: any = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res as Response;
};

describe('User Controller', () => {
  it('deve retornar erro para email inválido', () => {
    const req = { body: { name: 'Gabriel', email: 'invalidemail' } } as Request;
    const res = mockResponse();
    createUser(req, res);
    expect(res.status).toHaveBeenCalledWith(400);
  });
});