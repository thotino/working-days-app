const express = require('express');

const db = require('../models')

const router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const employees = await db.Employee.findAll({
    include: ['company', 'days']
  })
  return res.json(employees);
});

/* Create a new employee */
router.post('/', async function(req, res, next) {
    const transaction = await db.sequelize.transaction()
    try {
      const { email, firstName, lastName, companyId } = req.body
      const createdEmployee = await db.Company.create({ email, first_name: firstName, last_name: lastName, CompanyId }, { transaction })
      await transaction.commit()
      return res.json(createdEmployee)
    } catch (error) {
      await transaction.rollback()
      return res.status(400).send(error)
    }
  })

module.exports = router;
