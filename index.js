const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/query');


const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// This allows the client to post user information
app.post('/users', (req, res, next) => {
  db.createUser(req.body)
 	  .then(user => res.status(201).json(user))
		.catch(err => res.status(500).send(err));
});

app.get('/users', (req, res) => {
  db.getAllUsers()
  .then(users => res.json(users))
});

//This allows the client to login based on a specific code
app.post('/users/login', (req, res, next) => {
  db.login(req.body.code)
 		.then(users => {
 			if(!users) {
 				res.sendStatus(401);
 			} else {
 				res.json(users);
 			}
 		}).catch(err => {
 			res.status(500).send(err);
 		});
 });

 app.get('/users/:id', (req, res, next) => {
	const code = req.query.code;
	const id = req.params.id;

	db.getUserById(id)
		.then(users => {
			if(!users) {
				res.sendStatus(401);
			} else if(users.code !== code) {
				res.sendStatus(401);
			} else {
				res.json(users);
			}
		})
		.catch(err => res.status(500).send(err));
});





app.listen(port, () => {
  console.log('app listening on port:' + port);
});
