import fs = require('fs');

import jwt = require('jsonwebtoken');

const secret = '../jwt.evaluation.key';
const SECRET = fs.readFileSync(secret, 'utf-8');

const jwtConfig = {
  expiresIn: '10d',
};

export default (payload = {}) => jwt.sign({ data: payload }, SECRET, jwtConfig);
