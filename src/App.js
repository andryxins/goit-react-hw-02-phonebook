import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import * as helpers from './helpers/helpers';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: uuidv4(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: uuidv4(), name: 'Hermione Kline', number: '443-89-12' },
      { id: uuidv4(), name: 'Eden Clements', number: '645-17-79' },
      { id: uuidv4(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = (name, number) => {
    const { contacts } = this.state;

    if (helpers.isUniqueContact(contacts, name)) {
      alert(`${name} is already in contact!`);
      return false;
    }

    const newContact = {
      id: uuidv4(),
      name: name,
      number: number,
    };
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));

    return true;
  };

  handleDeleteContact = id => {
    const { contacts } = this.state;

    const filteredContacts = contacts.filter(item => item.id !== id);
    this.setState({ contacts: [...filteredContacts] });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredItems = helpers.filterContact(contacts, filter);

    console.log(contacts);

    return (
      <div>
        <h1 className="appTitle">Phonebook</h1>
        <ContactForm addContact={this.handleAddContact} />
        <h2 className="contactsTitle">Contacts</h2>
        <Filter handleChange={this.handleChange} />
        {contacts.length > 0 && (
          <ContactList
            contacts={filteredItems}
            handleDelete={this.handleDeleteContact}
          />
        )}
      </div>
    );
  }
}
