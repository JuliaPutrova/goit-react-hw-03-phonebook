import React from 'react';
import { ContactItem, BtnDelete } from './ContactList.styled';
import PropTypes from 'prop-types';

function ContactList({ title, contacts, deleteContact }) {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactItem key={id}>
          <p>
            {name}: {number}
          </p>
          <BtnDelete type="button" onClick={() => deleteContact(id)}>
            Delete
          </BtnDelete>
        </ContactItem>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  title: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
