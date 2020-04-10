import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Styles from './ContactForm.module.css';

const INITIAL_STATE = {
  currentUserInputName: '',
  currentUserInputNumber: '',
};

export default class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addContact } = this.props;
    const { currentUserInputName, currentUserInputNumber } = this.state;

    if (currentUserInputName.length < 2 || currentUserInputNumber.length < 2) {
      alert(`Fields must contain at least 2 symbols`);
      return;
    }

    addContact(currentUserInputName, currentUserInputNumber) &&
      this.resetState();
  };

  resetState = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { currentUserInputName, currentUserInputNumber } = this.state;

    return (
      <form className={Styles.form} onSubmit={this.handleSubmit}>
        <label className={Styles.formLabels} htmlFor="currentUserInputName">
          Name:
        </label>
        <input
          className={Styles.formFields}
          placeholder="New contact name..."
          type="text"
          id="currentUserInputName"
          name="currentUserInputName"
          value={currentUserInputName}
          onChange={this.handleChange}
        />
        <label className={Styles.formLabels} htmlFor="currentUserInputNumber">
          Number:
        </label>
        <input
          className={Styles.formFields}
          id="currentUserInputNumber"
          placeholder="000-00-00"
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          name="currentUserInputNumber"
          value={currentUserInputNumber}
          onChange={this.handleChange}
        />
        <button className={Styles.btnSubmit} type="submit">
          Add Contact
        </button>
      </form>
    );
  }
}
