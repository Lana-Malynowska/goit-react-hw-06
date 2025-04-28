import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={s.contact}>
      <div>
        <p>
          <FaUser />
          <span>{contact.name}</span>
        </p>
        <p>
          <FaPhoneAlt />
          <span>{contact.number}</span>
        </p>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
