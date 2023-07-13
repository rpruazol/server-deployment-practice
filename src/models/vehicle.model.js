"use strict";

// It's cool that you made the ability to have any vehicle not just cars//

const Vehicle = (dbInstance, DataTypes) =>
  dbInstance.define("Vehicle", {
    type: {
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
    electric: {
      type: DataTypes.BOOLEAN,
    },
  });
module.exports = Vehicle;
