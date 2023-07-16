"use strict";


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
      allowNull: false,

    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });


module.exports = Car;
