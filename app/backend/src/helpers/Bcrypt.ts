import * as bcrypt from 'bcryptjs';
// const bcrypt = require('bcrypt');

export const bcryptHash = async (password: string) => {
  bcrypt.hashSync(password, 10);
};

// const salt = bcrypt.SaltSync(password, 10);

const compare = (hashPassword: string, password: string) =>
  bcrypt.compareSync(password, hashPassword);
export default compare;
