import React, { Component } from 'react';
import { PhonebookForm } from './Phonebook/PhonebookForm';
import { ContactsList } from './Contacts/ContactsList'
const shortid = require('shortid');


export class App extends Component {
  static defaultProps = {
    initialContacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

state = {
  contacts: this.props.initialContacts,
}

  formSubmitHandler = data => { 
    console.log(data);
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))
  };

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  }
  


  render() {
    const { contacts } = this.state;
    return (
      <div>
      <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.formSubmitHandler} />
        <h2>My contacts</h2>
        {/* <Filter ... /> */}
        <ContactsList contacts={contacts} onDeleteContact={this.deleteContact } />
        </div>
    );
    }
};
