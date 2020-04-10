import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ContactList.module.css';

const ContactList = ({ contacts, handleDelete }) => (
  <ul className={Styles.contactList}>
    {contacts.map(item => (
      <li className={Styles.ContactListItem} key={item.id}>
        {item.name}: {item.number}
        <button
          className={Styles.btnDelete}
          type="button"
          onClick={e => handleDelete(item.id)}
        >
          delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  handleDelete: PropTypes.func,
};

export default ContactList;
