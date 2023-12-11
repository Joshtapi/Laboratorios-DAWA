var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/sobre', function(req, res, next) {
  res.render('sobre');
});

router.get('/experiencia', function(req, res, next) {
  res.render('experiencia');
});

router.get('/educacion', function(req, res, next) {
  res.render('educacion');
});

router.get('/habilidades', function(req, res, next) {
  res.render('habilidades');
});

router.get('/proyectos', function(req, res, next) {
  res.render('proyectos');
});

router.get('/contacto', function(req, res, next) {
  res.render('contacto');
});
router.get('/confirmacion', function(req, res, next) {
  res.render('confirmacion');
});

module.exports = router;
