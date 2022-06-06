import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { readFileSync } from 'fs';

const secret = 'jwt.evaluation.key';
const SECRET = readFileSync(secret, 'utf8');

export default class ValidToken {
  public loginValidate = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    console.log(token, 'token');
    // const { email } = await req.body;
    if (!token) {
      // return res.status(401).json({ message: 'Token is required' });
      return res.status(401).json({ message: 'unautorized' });
    }
    try {
      jwt.verify(token, SECRET);
    } catch (err) {
      // return res.status(401).json({ message: 'expired or invalid token' });
      return res.status(401).end;
    }
    // const { data } = <jwt.JwtPayload> jwt.decode(token);
    // const result = await User.findOne({ where: { email: data } });
    // return res.status(200).json(result?.role);
    next();
  };
}
