import { NextFunction, Request, Response } from 'express';

export default class ValidationLogin {
  public validEmailRegex = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = await req.body;
    const regexEmail = /\S+@\S+\.\S+/;
    regexEmail.test(email);
    console.log(regexEmail, 'result-regex');
    if (!regexEmail) {
      return res.status(401).json({ menssagem: 'Incorrect email or password' });
    }
    next();
  };
}
