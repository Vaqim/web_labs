const { Router } = require('express');
const asyncHandler = require('express-async-handler');

const contactsController = require('../controllers/contact');

const contact = Router();

contact.get(
  '/',
  asyncHandler(async (req, res) => contactsController.getAllContacts(req, res)),
);

contact.get(
  '/delete/:id',
  asyncHandler(async (req, res) => contactsController.deleteContact(req, res)),
);

contact.get('/create', (req, res) => res.render('contactForm', { action: '/contacts/create' }));

contact.get(
  '/edit/:id',
  asyncHandler(async (req, res) => contactsController.getContact(req, res)),
);

contact.post(
  '/create',
  asyncHandler(async (req, res) => {
    await contactsController.createContact(req, res);
  }),
);

contact.post(
  '/edit/:id',
  asyncHandler(async (req, res) => contactsController.updateContact(req, res)),
);

module.exports = contact;
