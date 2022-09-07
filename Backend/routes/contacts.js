const express = require('express')
const router = express.Router()
const {createContact,getContacts,getContact,deleteContact,updateContact,searchContacts} =require('../controllers/contactController')

//Get all contacts
router.get('/',getContacts)

//Find one contact
router.get('/:id',getContact)


//Find contact by name
router.get('/search/:id',searchContacts)


//Create new contact
router.post('/',createContact)


//Update contact 
router.patch('/:id',updateContact)


//Delete a contact
router.delete('/:id',deleteContact)



module.exports = router