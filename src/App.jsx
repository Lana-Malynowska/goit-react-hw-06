import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = window.localStorage.getItem("contacts");
    return saved
      ? JSON.parse(saved)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    const contactWithId = { id: nanoid(10), ...newContact };
    setContacts((prev) => [...prev, contactWithId]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox inputValue={inputValue} handleChange={setInputValue} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
