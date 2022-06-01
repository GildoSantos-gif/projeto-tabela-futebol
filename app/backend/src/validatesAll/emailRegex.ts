import { NextFunction, Request, Response } from 'express';

const emailRegex = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  const regexEmail = /\S+@\S+\.\S+/;
  regexEmail.test(email);

  if (!regexEmail) {
    return res.status(400).json({ message: 'Incorrect email or password' });
  }

  next();
};

export default emailRegex;
