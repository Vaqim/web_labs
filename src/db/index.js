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
    throw new Error('Can`t get users');
  }
}

async function deleteContact(id) {
  try {
    const contactsList = await client('contacts').where({ id }).del('*');
    return contactsList;
  } catch (error) {
    console.error(error.message || error);
    throw new Error('Can`t delete user');
  }
}

async function createContact(data) {
  try {
    await client('contacts').insert(data);
  } catch (error) {
    console.error(error.message || error);
    throw new Error('Can`t create user');
  }
}

async function updateContact(data) {
  try {
    const { id } = data;
    delete data.id;
    await client('contacts').where({ id }).update(data);
  } catch (error) {
    console.error(error.message || error);
    throw new Error('Can`t update user');
  }
}

async function getContact(id) {
  try {
    const contact = await client('contacts').select('*').where({ id });
    return contact[0];
  } catch (error) {
    console.error(error.message || error);
    throw new Error('Can`t update user');
  }
}

module.exports = {
  testConnection,
  getAllContacts,
  deleteContact,
  createContact,
  updateContact,
  getContact,
};
