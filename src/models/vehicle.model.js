"use strict";

const Vehicle = (dbInstance, DataTypes) =>
  dbInstance.define("Vehicle", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
module.exports = Vehicle;
