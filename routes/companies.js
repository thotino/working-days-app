const express = require('express');

const db = require('../models')

const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const companies = await db.Company.findAll({ include: 'employees' })
  return res.json(companies);
});

/* Create a new company */
router.post('/', async function(req, res, next) {
  const transaction = await db.sequelize.transaction()
  try {
    const { name } = req.body
    const createdCompany = await db.Company.create({ name }, { transaction })
    await transaction.commit()
    return res.json(createdCompany)
  } catch (error) {
    await transaction.rollback()
    return res.status(400).send(error)
  }
})

module.exports = router;
