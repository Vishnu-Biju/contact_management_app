//@description : get all contacts
//@ rout GET/api/contacts
//@ access public // later on it will be private

const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

//@description : get a contact
//@ rout GET/api/contacts
//@ access public // later on it will be private

const getContact = (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

//@description : create new contacts
//@ rout POST/api/contacts
//@ access public // later on it will be private

const createContact = (req, res) => {
  console.log("the request body is: " ,req.body);
  const {name, email, phone } = req.body;
  if(!name || !email || !phone){
    res.status(400)
    throw new Error("All fields are mandatory")
  }
  res.status(201).json({ message: "Create contact" });
};

//@description : update contact
//@ rout PUT/api/contacts
//@ access public // later on it will be private

const updateContact = (req, res) => {
  res.status(200).json({ message: `update contact for ${req.params.id}` });
};

//@description : delete contacts
//@ rout DELETE/api/contacts
//@ access public // later on it will be private

const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contacts for ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
