require('dotenv').config();

const knex = require('knex');
const dbEnvironment = process.env.NODE_ENV || 'development';
const configs = require('../../knexfile')[dbEnvironment]

export default knex(configs)