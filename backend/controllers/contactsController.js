const Contact = require('../models/contactsModel');


const getContacts = async function (req, res) {
    try {
        const allContacts = await Contact.find({});
        res.status(200).json({ allContacts, message: "contacts fetched" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
const createContact = async function (req, res) {

    const { firstName, lastName, email, phoneNumber, company, jobTitle } = req.body;
    try {
        const newContact = await Contact.create({
            firstName,
            lastName,
            email,
            phoneNumber,
            company,
            jobTitle
        });
        res.status(200).json({ newContact, message: "contact created" });
    } catch (error) {
        res.status(500).json(error);
    }
}
const updateContact = async function (req, res) {
    try {
        const contact = req.body;
        const { id } = req.params;
        const updatedContact = await Contact.findByIdAndUpdate(id, contact, { new: true });
        res.status(200).json({ updatedContact, message: "contact updated" });
    } catch (error) {
        res.status(500).json(error);
    }
}
const deleteContact = async function (req, res) {
    try {
        const { id } = req.params;
        const deletedContact = await Contact.findByIdAndDelete(id);
        res.status(200).json({ deletedContact, message: "contact deleted" });
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    getContacts,
    createContact,
    updateContact,
    deleteContact
}