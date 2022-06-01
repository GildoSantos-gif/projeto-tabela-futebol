import User from '../database/models/UserModel';
import compare from '../helpers/Bcrypt';
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
    const getUserByEmail: User | null = await User.findOne({ where: { email } });
    if (!getUserByEmail) {
      throw Error('Incorrect email or password');
    }
    // const { password } = getUserByEmail;
    // const compare = bcrypt.compareSync(get.password, data.password);
    const bcryptCompare = compare(password, getUserByEmail.password);

    if (!bcryptCompare) {
      throw Error('Incorrect email or password');
    }
    const token = jwtGenerator(email);
    // console.log()
    return { user: getUserByEmail, token };
  };
}
