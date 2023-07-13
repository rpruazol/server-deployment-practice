"use strict";

// I like how many parameters you have, will make it easy to have a collection//
const Car = (dbInstance, DataTypes) => 
  dbInstance.define('Car', {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
    },
    color: {
      type: DataTypes.STRING,
    },
    vin: {
      type: DataTypes.INTEGER,
    },
  });


module.exports = Car;
