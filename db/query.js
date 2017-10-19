const db = require('./connections');

//This allows the client to insert user info and will return a unique id/code
function createUser(users) {
  const code = generateRandomNum();
 	users.code = code;
 	return db('users').insert(users).returning(['id', 'code']);
 }

 function generateRandomNum(){
   return Math.floor(Math.random() * 999999);
 }

function getUserById(id){
  return db('users').first().where('id', id);
}

function login(code){
  return db('users').select().where('code', code);
}

function getAllUsers(){
  return db('users').select('*').from('users');
}

module.exports = {
  createUser,
  getUserById,
  login,
  getAllUsers
}
