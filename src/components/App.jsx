import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchFilter from './searchFilter/SearchFilter';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts:</h2>
      <SearchFilter />
      <ContactList className={styles.list} />
    </div>
  );
};

export default App;
