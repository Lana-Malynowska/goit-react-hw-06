import { FaUser, FaPhoneAlt } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={s.contact} key={id}>
      <div>
        <p>
          <FaUser />
          <span>{name}</span>
        </p>
        <p>
          <FaPhoneAlt />
          <span>{number}</span>
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
};

export default Contact;
