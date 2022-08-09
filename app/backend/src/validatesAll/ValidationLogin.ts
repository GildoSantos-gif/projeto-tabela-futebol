import { NextFunction, Request, Response } from 'express';
import User from '../database/models/UserModel';

export default class ValidationLogin {
  public validLogin = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body, 'req.body validLogin-controller');
    const { email, password } = req.body;
    const message = { message: 'Incorrect email or password' };
    const message2 = { message: 'All fields must be filled' };

    if (!email || !password) {
      return res.status(400).json(message2);
    }
    const getUserByEmail = await User.findOne({ where: { email } });
    console.log(getUserByEmail, 'getUserByEmail log');

    if (!getUserByEmail?.email) {
    
      return res.status(401).json(message);
    }
    if (password.length < 6) {
      return res.status(400).json(message);
    }
    /*
      if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json(mensagem);
  }
  if (email === '' || password === '') {
    return res.status(400).json(mensagem2);
  }
  */

    next();
  };
}
