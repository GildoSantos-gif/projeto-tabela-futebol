import * as bcrypt from 'bcryptjs';
import User from '../database/models/UserModel';
// import compare from '../helpers/Bcrypt';
// const jwt = require('jsonwebtoken');
import jwtGenerator from '../helpers/jwtGenerator';

export interface ILogin {
  email: string,
  password: string,
}

export default class LoginService {
  // userLogin: ILogin;

  // constructor(userLogin: ILogin) {
  //  this.userLogin = userLogin;
  // }

  login = async (data: ILogin) => {
    const { email, password } = data;
    console.log(data, 'req.body login-service');
    const getUserByEmail = await User.findOne({ where: { email } });
    console.log(getUserByEmail, 'getUserByEmail log');

    if (!getUserByEmail) {
      // throw Error('Incorrect email or password');
      return undefined;
    }
    /*
    // const { password } = getUserByEmail;
    // const compare = bcrypt.compareSync(get.password, data.password);
    */
    const bcryptCompare = bcrypt.compareSync(password, getUserByEmail.password);
    // compare(password, getUserByEmail.password);

    if (!bcryptCompare) {
      return undefined;
    }

    const token = jwtGenerator(email);
    // console.log(token)
    const { id, username, role } = getUserByEmail;
    console.log(getUserByEmail, 'log result final');
    return { user: { id, username, role, email }, token };
  };
}
