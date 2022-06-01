import { Request, Response } from 'express';
import jwt = require('jsonwebtoken');
import { readFileSync } from 'fs';
import LoginService from '../services/LoginService';
import User from '../database/models/UserModel';

const secret = '../jwt.evaluation.key';
const SECRET = readFileSync(secret, 'utf-8');

export default class LoginController {
  loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  login = async (req: Request, res: Response) => {
    const result = await this.loginService.login(req.body);
    res.status(200).json(result);
  };

  loginValidate = async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    const { email } = req.body;
    if (!token) {
      return res.status(401).json({ message: 'Token is required' });
    }
    try {
      jwt.verify(token, SECRET);
    } catch (err) {
      return res.status(401).json({ message: 'expired or invalid token' });
    }
    const result = await User.findOne({ where: { email } });
    return res.status(200).json(result?.role);
  };
}
