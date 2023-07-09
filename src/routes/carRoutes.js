'use strict';

const express = require('express');
const {Car} = require('../models/index');

{}
const router = express.Router();



router.get('/cars', getCars);
router.post('/newcar', createCar);

async function getCars(req, res){
  let allCars = await Car.findAll();
  console.log(allCars);
  res.status(200).json(allCars);
}

async function createCar(req, res){
  const car = await Car.create({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    color: req.body.color,
    vin: req.body.vin
  }, {
    fields: ['make','model','year','color', 'vin']
  });
  res.status(200).json(car);
}


module.exports = router;