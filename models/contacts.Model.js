const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true },
  subject: { type: "String", required: true },
  phone: { type: "String", require:true },
  message: { type: "String", required: true },
});

const ContactsCollection = mongoose.model("contact", contactSchema);

module.exports = ContactsCollection;
