const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get('/ping', (req, res, next) => {
  res.status(200).json('pong!');
});

let id = 1;
const users = [{ id: id, email: 'test@test.com', password: 'test' }];

app.post('/register', (req, res, next) => {
  if (req.body.email && req.body.password) {
    const user = { id: id++, email: req.body.email, password: req.body.password }
    users.push(user)
    res.status(201).json({
      status: 'success',
      token: '1234567'
    });
  } else {
    res.status(400).json({
      status: 'error'
    });
  }
  console.log(users);
});

app.post('/login', (req, res, next) => {
  for (let user of users) {
    if (user.email == req.body.email && user.password == req.body.password) {
      res.status(200).json({
        status: 'success',
        token: '1234567'
      });
    }
  }
  res.status(400).json({
    status: 'error'
  });
});


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: 'error',
    error: err
  });
});

app.listen(1330, () => {
  console.log('App listening on port 1330!');
});
