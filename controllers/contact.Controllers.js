const asyncHandler = require("express-async-handler");
const ContactsCollection = require("../models/contacts.Model");

//@description     Add New new Contact
//@route           POST /api/review/
//@access          Public
const addNewContact = asyncHandler(async (req, res) => {
  const { name, email, subject, phone, message } = req.body;

  if (!name || !email || !subject || !phone || !message) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  const newContact = await ContactsCollection.create({
    name,
    email,
    subject,
    phone,
    message,
  });

  if (newContact) {
    res.status(201).send(newContact);
  } else {
    res.status(400);
    throw new Error("Something Went Wrong!");
  }
});

//@description     Get all Reviews
//@route           GET /api/review/
//@access          Public
const getAllContacts = asyncHandler(async (req, res) => {
  const query = {};
  const result = (await ContactsCollection.find(query)).reverse();
  res.send(result);
});

module.exports = { addNewContact, getAllContacts };
