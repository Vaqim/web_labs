const Knex = require('knex');
const { db: dbConfig } = require('../config');

const client = new Knex(dbConfig);

async function testConnection() {
  try {
    await client.raw('SELECT NOW()');
    console.log('Database connection created');
  } catch (error) {
    console.error(error.message || error);
    throw error;
  }
}

module.exports = {
  testConnection,
};
