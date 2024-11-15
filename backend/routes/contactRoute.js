const express = require('express');
const router = express.Router();
const { createContact, getContacts, deleteContact, updateContact } = require('.././controllers/contactsController');


router.get('/', getContacts)
router.post('/', createContact)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact)


module.exports = router;