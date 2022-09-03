const express = require('express');

const db = require('../models')

const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const companies = await db.Company.findAll()
  return res.json(companies);
});

module.exports = router;
