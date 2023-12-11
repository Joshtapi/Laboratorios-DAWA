require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const usersRouter = require('./routes/users');

const app = express();

// Configuración de MongoDB
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected!'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Configuración de plantilla EJS
app.set('view engine', 'ejs');

// Configuración de bodyParser para parsear URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Rutas
app.use('/users', usersRouter);

// Ruta raíz redirige a /users
app.get('/', (req, res) => {
  res.redirect('/users');
});

// Manejo de errores de validación
app.use((err, req, res, next) => {
  if (err instanceof Error) {
    const errorMessages = err.array().map(error => error.msg);
    return res.render('tu_pagina', { errors: errorMessages });
  }
  next(err);
});

// Iniciar servidor
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
