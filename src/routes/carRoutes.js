'use strict';

const express = require('express');
const {carCollection} = require('../models/index');
const router = express.Router();



router.get('/cars', getCars);
router.get('/cars/:id', getCars);
router.post('/newcar', createCar);
router.put('/updatecar/:id', updateCar);
router.delete('/deletecar/:id', deleteCar);

async function getCars(req, res){
  let allCars = await carCollection.read();
  // console.log(allCars);
  res.status(200).json(allCars);
}

async function createCar(req, res){
  // const car = await Car.create({
  //   make: req.body.make,
  //   model: req.body.model,
  //   year: req.body.year,
  //   color: req.body.color,
  //   vin: req.body.vin
  // }, {
  //   fields: ['make','model','year','color', 'vin']
  // });
  const car = await carCollection.create(req.body)
  res.status(200).json(car);
}

async function updateCar(req, res){
  const id = req.params.id;
  const data = req.body;
  // console.log('update req', id, data)
  const car = await carCollection.read(id);
  const updatedCar = await carCollection.update(id, data);
  res.status(200).json(updatedCar);
}

async function deleteCar(req, res){
  const id = req.params.id;
  console.log(id);
  const deletedCar = await carCollection.delete(id);
  const car = await carCollection.read();
  res.status(204).json(deletedCar);
}


module.exports = router;