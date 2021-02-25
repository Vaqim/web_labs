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

async function getAllContacts() {
  try {
    const contactsList = await client('contacts').select('*');
    return contactsList;
  } catch (error) {
    console.error(error.message || error);
    throw error;
  }
}

module.exports = {
  testConnection,
  getAllContacts,
};
