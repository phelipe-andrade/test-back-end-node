const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const startCollect = require('./src/collectUniversities/startCollect');

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conectou Mongo');
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const routeUniversities = require('./src/routes/universities');
// const rotaPedidos = require('./routes/pedidos');
// const rotaUsuarios = require('./routes/usuarios');

app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Header',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );

  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Alolow-Methods',
      'PUT, POST, PATCH, DELETE, GET',
    );
    return res.status(200);
  }

  next();
});

app.use('/universities', routeUniversities);
// app.use('/pedidos', rotaPedidos);
// app.use('/usuarios', rotaUsuarios);

//QUANDO NÃO ENCONTRA A ROTA
app.use((req, res, next) => {
  const erro = new Error('não encontrado');
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagen: error.message,
    },
  });
});

app.on('pronto', () => startCollect());

module.exports = app;
