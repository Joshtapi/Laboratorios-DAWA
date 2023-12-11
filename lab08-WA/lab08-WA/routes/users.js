const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

const router = express.Router();

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const User = mongoose.model('User', userSchema);

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.render('index', { users, errors: [] });
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
    res.status(500).send('Error al obtener usuarios.');
  }
});

router.post('/', [
  body('name').notEmpty().withMessage('El nombre es requerido'),
  body('email').isEmail().withMessage('El email no es válido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
], async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    try {
      const users = await User.find();
      return res.render('index', { errors: errorMessages, users });
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      res.status(500).send('Error al obtener usuarios.');
    }
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const existingUser = await User.findOne({ $or: [{ email: req.body.email }, { name: req.body.name }] });

    if (existingUser) {
      const errorMessages = ['Este correo o nombre de usuario ya está registrado'];
      const users = await User.find();
      return res.render('index', { errors: errorMessages, users });
    }

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });

    await newUser.save();
    res.redirect('/users');
  } catch (error) {
    console.error('Error al crear un nuevo usuario:', error);
    res.status(500).send('Error al crear un nuevo usuario.');
  }
});

router.get('/edit/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.render('partials/edit', { user, errors: [] });
  } catch (error) {
    console.error('Error al obtener usuario para editar:', error);
    res.status(500).send('Error al obtener usuario para editar.');
  }
});


router.post('/update/:id', async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    try {
      const user = await User.findById(req.params.id);
      return res.render('partials/edit', { user, errors: errors.array() });
    } catch (error) {
      console.error('Error al obtener usuario para editar:', error);
      res.status(500).send('Error al obtener usuario para editar');
    }
  }

  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ _id: { $ne: req.params.id }, name });

    if (existingUser) {
      const user = await User.findById(req.params.id);
      const errorMessages = [{ msg: 'El nombre ya está en uso' }];
      return res.render('partials/edit', { user, errors: errorMessages });
    }

    const existingEmail = await User.findOne({ _id: { $ne: req.params.id }, email });

    if (existingEmail) {
      const user = await User.findById(req.params.id);
      const errorMessages = [{ msg: 'El correo ya está en uso' }];
      return res.render('partials/edit', { user, errors: errorMessages });
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      req.body.password = hashedPassword;
    }

    await User.findByIdAndUpdate(req.params.id, { name, email, password });
    res.redirect('/users');
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).send('Error al actualizar el usuario');
  }
});


router.get('/delete/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    res.redirect('/users');
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    res.status(500).send('Error al eliminar usuario');
  }
});

module.exports = router;
