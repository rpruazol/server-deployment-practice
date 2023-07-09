'use strict';

const express = require('express');
const {Car} = require('../models/index');
const router = express.Router();



router.get('/cars', getCars);
router.post('/newcar', createCar);
router.put('/updatecar/:id', updateCar);

async function getCars(req, res){
  let allCars = await Car.findAll();
  // console.log(allCars);
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

async function updateCar(req, res){
  const id = req.params.id;
  const data = req.body;
  console.log('update req', id, data)
  const car = await Car.findOne({where: {id}});

  // record is not updating
  const updatedCar = await car.update(data);
  console.log('DATA>>>', data);
  console.log('OLDCAR>>>, ',car);
  console.log('UPDATEDCAR>>>, ',updatedCar);
  res.status(200).json(updatedCar);
}


module.exports = router;