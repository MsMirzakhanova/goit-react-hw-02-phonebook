import React, { Component } from 'react';
import {PhonebookForm} from './Phonebook/PhonebookForm';

export class App extends Component {

  state = {
    contacts: [],
  };

  formSubmitHandler = data => { 
    console.log(data);
  };
  


  render() {
    return (
      <PhonebookForm onSubmit={this.formSubmitHandler} />
        )
    }
};
