import { NextFunction, Request, Response } from 'express';

const validLogin = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  const mensagem = { message: 'Incorrect email or password' };
  const mensagem2 = { message: 'All fields must be filled' };

  if (!email || !password) {
    return res.status(400).json(mensagem2);
  }
  if (email === '' || password === '') {
    return res.status(400).json(mensagem2);
  }
  if (password.length < 6 || typeof password !== 'string') {
    return res.status(400).json(mensagem);
  }
  if (typeof email !== 'string' || password !== 'string') {
    return res.status(400).json(mensagem);
  }

  next();
};

export default validLogin;
