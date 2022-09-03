const express = require('express');

const db = require('../models')

const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const employees = await db.Employee.findAll()
  return res.json(employees);
});

module.exports = router;
