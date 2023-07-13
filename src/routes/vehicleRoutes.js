'use strict';

const express = require('express');
const {vehicleCollection} = require('../models/index');
const router = express.Router();

router.get('/vehicles', getVehicles);
router.get('/vehicles/:id', getVehicles);
router.post('/createvehicle', createVehicle);
router.put('/updatevehicle', updateVehicle);
router.delete('/deletevehicle', deleteVehicle);

async function getVehicles(req, res) {
  const allVehicles = await vehicleCollection.read();
  res.status(200).json(allVehicles)
}

async function createVehicle(req, res){
  const vehicle = await vehicleCollection.create(req.body)
  res.status(200).json(vehicle);
}

async function updateVehicle(req, res){
  const id = req.params.id;
  const data = req.body;
  const vehicle = await vehicleCollection.read(id);

  const updatedVehicle = await vehicleCollection.update(id, data)
  res.status(200).json(updatedVehicle)
}

async function deleteVehicle(req, res){
  const id = req.params.id;
  const deletedCar = await vehicleCollection.delete(id);
  res.status(204).json(deleteVehicle);
}

module.exports = router;