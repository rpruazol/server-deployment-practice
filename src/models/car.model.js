"use strict";


const Car = (dbInstance, DataTypes) => 
  dbInstance.define('Car', {
    make: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
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
