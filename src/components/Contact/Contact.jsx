import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contacts: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.item}>
      <div className={s.card}>
        <p className={s.name}>
          <FaUser className={s.icon} />
          {name}
        </p>

        <p className={s.number}>
          <BsFillTelephoneFill className={s.icon} />
          {number}
        </p>
      </div>
      <button onClick={() => dispatch(deleteContact(id))} className={s.btn}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
