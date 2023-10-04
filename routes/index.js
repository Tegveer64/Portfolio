/**
 * File Name: index.js
 * Student’s Name: Tegveer Saggu
 * StudentID: 301153567
 * Date: 10/4/2023
 */
 
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tegveer Saggu' });
});

/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me - Tegveer Saggu' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects - Tegveer Saggu' });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services - Tegveer Saggu' });
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact - Tegveer Saggu' });
});

module.exports = router;
