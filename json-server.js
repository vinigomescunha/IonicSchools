const jsonServer = require('json-server');
const fs = require('fs')
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  bodyParser: true,
  noCors: false,
  readOnly: false
});
const fakeDatabase = JSON.parse(fs.readFileSync('./db.json', 'UTF-8'))
/**
 * Verifico se é uma rota de tentativa de login, nessa rota faço fake autenticação
 * @param {*} req Request
 * @returns {Boolean}
 */
const isLogin = (req) => req.url === '/login' && req.method === 'POST';
/**
 * Obtenho um falso Bearer token, ex: Bearer 5d9508af304d89b58c6e7efd46a5ab4d
 * @param {*} authorization 
 */
const getFakeBearerToken = (authorization) => authorization.split(' ')[1];
/**
 * Verifico se existe usuario pelo token na lista de usuarios
 * @param {String} token 
 */
const getUserByToken = (token) => fakeDatabase.users.find((user) => user.token === token);
/**
 * Obtenho usuario atraves do username e password
 * @param {*} username 
 * @param {*} password 
 */
const getFakeAuth = (username, password) => fakeDatabase.users.find((user) => user.username === username && user.password === password);
/**
 * Verifico se existe bearer token, e se o token esta na lista de usuarios
 * @param {} token 
 */
const isAuthorized = (authorization) => {
  let token;
  if (authorization) {
    token = getFakeBearerToken(authorization);
  }
  return getUserByToken(token) !== undefined;
};

server.use(middlewares);

server.use((req, res, next) => {
  if (isLogin(req) || isAuthorized(req.headers.authorization)) {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.post('/login', (req, res, next) => {
  // extraio username e password do corpo do login
  const { username, password } = req.body;
  const user = getFakeAuth(username, password);
  if (username && password && user) {
    res.json({ token: user.token });
  } else {
    res.sendStatus(401);
  }
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
