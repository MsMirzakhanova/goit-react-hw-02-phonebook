import React from 'react';
// import PropTypes from 'prop-types';



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


// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ).isRequired,
//   onContactRemove: PropTypes.func.isRequired,
// };

    
