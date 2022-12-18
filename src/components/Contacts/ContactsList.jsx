import React from 'react';



export const ContactsList = ({ contacts, onDeleteContact}) => (
    <ul>
        {contacts.map(contact => (
            <li key={contact.id}>  
                <p>{contact.name}: {contact.number}{' '}</p>
                <button onClick={()=> onDeleteContact(contact.id)}>delete</button>
            </li>
        )
            )}
</ul>
)
    
