import React, { Component } from 'react';
import { PhonebookForm } from './Phonebook/PhonebookForm';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import toast, { Toaster } from 'react-hot-toast';

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
  filter: '',
}

  formSubmitHandler = data => { 
    console.log(data);
    const contact = {
      id: shortid.generate(),
      name: data.name,
      number: data.number,
    };


const normalizeName = contact.name.toLowerCase();
const isNameInContact = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizeName
);
    isNameInContact ? toast.success(`${contact.name} is already in contacts`) :
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }))


  };

  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }))
  }
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }
  
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const filterNormilized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormilized)
    );
}

  render() {
    
    const {filter} = this.state;
    
    const visibleContacts = this.getVisibleContacts();
    
    return (
      <div>
      <h1>Phonebook</h1>
        <PhonebookForm onSubmit={this.formSubmitHandler} />
        <h2>My contacts</h2>
        <Filter value={filter} onChange={this.changeFilter } />
        <ContactsList contacts={visibleContacts} onDeleteContact={this.deleteContact} />
        <Toaster />
        </div>
    );
    }
};
