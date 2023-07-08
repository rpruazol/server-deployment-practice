'use strict';

const {Sequelize} = require('sequelize');
require('dotenv').config();

const POSTGRES_URI = process.env.NODE_ENV === 'dev' ? 'sqlite:memory' : process.env.DATABASE_URI;

const sequelize = new Sequelize(POSTGRES_URI);

module.exports = {
  dbInstance: sequelize
}