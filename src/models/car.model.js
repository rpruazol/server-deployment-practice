"use strict";

// I like the extensiveness of your models//
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
