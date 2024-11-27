import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";

import "modern-normalize";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import { selectLoading } from "./redux/contactsSlice";
import LoaderApi from "./components/Loader/Loader";

function App() {
  const loading = useSelector(selectLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <section>
      <div className="container">
        <h1 className="title">Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading ? <LoaderApi /> : <ContactList />}
      </div>
    </section>
  );
}

export default App;
