"use strict";

const { Sequelize, DataTypes } = require("sequelize");
const vehicle = require("./vehicle.model.js");
const car = require("./car.model.js");
const Collection = require('./collections');
require("dotenv").config();

const POSTGRES_URI =
  process.env.NODE_ENV === "test" ? "sqlite:memory" : process.env.DATABASE_URI;

  
  
  const sequelize = new Sequelize(POSTGRES_URI);
  

  const vehicleModel = vehicle(sequelize, DataTypes)
  const vehicleCollection = new Collection(vehicleModel);

  const carModel = car(sequelize, DataTypes)
  const carCollection = new Collection(carModel);

  // associations

  vehicleModel.hasMany(carModel, {
    foreignKey: 'vehicleId',
    sourceKey: 'id'
  })
  carModel.belongsTo(vehicleModel, {
    foreignKey: 'vehicleId',
    targetKey: 'id'
  })

module.exports = {
  dbInstance: sequelize,
  carCollection,
  vehicleCollection
};
