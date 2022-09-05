const express = require('express')
const router = express.Router()
const {createContact,getContacts,getContact,deleteContact,updateContact} =require('../controllers/contactController')

//Get all contacts
router.get('/',getContacts)

//Find one contact
router.get('/:id',getContact)

//Create new contact
router.post('/',createContact)


//Update contact 
router.patch('/:id',updateContact)


//Delete a contact
router.delete('/:id',deleteContact)



module.exports = router