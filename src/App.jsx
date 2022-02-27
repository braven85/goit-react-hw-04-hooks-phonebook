import "./App.css";
import React, { useState } from "react";

import { nanoid } from "nanoid";
import { Repository } from "./components/Repository";
import HorizontalLine from "./components/HorizontalLine";
import PropTypes from "prop-types";

import ContactForm from "./components/ContactForm";
import ContactsList from "./components/ContactsList";
import { Filter } from "./components/Filter";

function App() {
  const [contacts, setContact] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);

  const [filter, setFilter] = useState("");

  function addContact({ name, number }) {
    const contact = { id: nanoid(), name, number };
    return contacts.some((el) => el.name === name)
      ? alert(`${name} is already on the contacts list`)
      : setContact([contact, ...contacts]);
  }

  function getContacts() {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  }

  function filterContacts(e) {
    return setFilter(e.target.value.toLowerCase());
  }

  function removeContact(id) {
    return setContact(contacts.filter((contact) => contact.id !== id));
  }

  const returnedContacts = getContacts();

  return (
    <div className="App">
      <Repository />
      <HorizontalLine />
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <HorizontalLine />
      <h1>Contacts</h1>
      <Filter filter={filterContacts} />
      <ContactsList contacts={returnedContacts} removeContact={removeContact} />
    </div>
  );
}

export default App;

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};
