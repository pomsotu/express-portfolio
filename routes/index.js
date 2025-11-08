var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home', active: 'home' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About', active: 'about' });
});

router.get('/projects', (req, res) => {
  res.render('projects', { title: 'Projects', active: 'projects' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact', active: 'contact', sent: req.query.sent === '1' });
});

router.post('/contact', (req, res) => {
  res.redirect('/contact?sent=1');
});

module.exports = router;