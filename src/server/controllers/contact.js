const db = require('../../db');

async function getAllContacts(req, res) {
  try {
    const contactsList = await db.getAllContacts();
    res.json(contactsList);
  } catch (error) {
    res.json({ error: error.message || 'We have problem :(' }).status(402);
    console.error(error.message || error);
    throw error;
  }
}

module.exports = {
  getAllContacts,
};
