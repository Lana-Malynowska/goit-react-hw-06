import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.contacts}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <li className={s.listItem} key={contact.id}>
            <Contact contact={contact} />
          </li>
        ))
      ) : (
        <strong>Looks like your contact list is feeling a bit lonely...</strong>
      )}
    </ul>
  );
};

export default ContactList;
