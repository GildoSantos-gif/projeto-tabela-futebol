import { Request, Response, NextFunction } from 'express';
import jwt = require('jsonwebtoken');
import { readFileSync } from 'fs';
import LoginService from '../services/LoginService';
import User from '../database/models/UserModel';

const secret = 'jwt.evaluation.key';
const SECRET = readFileSync(secret, 'utf8');

export default class LoginController {
  loginService: LoginService;

  constructor() {
    this.loginService = new LoginService();
  }

  public loginEmailRegex = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = await req.body;
    const regexEmail = /\S+@\S+\.\S+/;
    regexEmail.test(email);
    console.log(regexEmail, 'result-regex');
    const message = { message: 'Incorrect email' };
    if (!regexEmail) {
      return res.status(401).json(message);
    }
    next();
  };

  public login = async (req: Request, res: Response) => {
    console.log(req.body, 'req.body login-controller');
    const result = await this.loginService.login(req.body);
    console.log(req.body, 'log re.body');
    console.log(result, 'result-controller-login');
    if (!result || result === undefined) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    res.status(200).json(result);
  };

  public loginValidate = async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    // const { email } = await req.body;
    if (!token) {
      // return res.status(401).json({ message: 'Token is required' });
      return res.status(401).end;
    }
    try {
      jwt.verify(token, SECRET);
    } catch (err) {
      // return res.status(401).json({ message: 'expired or invalid token' });
      return res.status(401).end;
    }
    const { data } = <jwt.JwtPayload> jwt.decode(token);
    const result = await User.findOne({ where: { email: data } });
    return res.status(200).json(result?.role);
  };
}
