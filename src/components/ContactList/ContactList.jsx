import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const items = useSelector(selectFilteredContacts);
  return (
    <ul className={s.list}>
      {items.map(({ id, name, number }) => (
        <Contact key={id} contacts={{ id, name, number }} />
      ))}
    </ul>
  );
};

export default ContactList;
