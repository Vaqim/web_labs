const { Router } = require('express');
const asyncHandler = require('express-async-handler');

const contactseController = require('../controllers/contact');

const contact = Router();

contact.get(
  '/',
  asyncHandler(async (req, res) => {
    try {
      await contactseController.getAllContacts(req, res);
    } catch (error) {
      console.error(error.message || error);
      res.json({ error: 'Ooops!...' }).status(500);
      throw error;
    }
  }),
);
// contact.get('/:id');
// contact.post('/create');
// contact.put('/edit/:id');
// contact.delete('/delete/:id');

module.exports = contact;
