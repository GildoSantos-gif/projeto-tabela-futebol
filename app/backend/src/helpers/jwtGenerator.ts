import * as fs from 'fs';

import * as jwt from 'jsonwebtoken';

const secret = 'jwt.evaluation.key';
const SECRET = fs.readFileSync(secret, 'utf8');

const jwtConfig = {
  expiresIn: '10d',
  // algorithm: 'HS256',
};

export default (payload = {}) => jwt.sign({ data: payload }, SECRET, jwtConfig);
