import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Filter.module.css';

const Filter = ({ handleChange }) => (
  <div className={Styles.filterWrapper}>
    <label className={Styles.filterLabel} htmlFor="filter">
      Find contact by name:
    </label>
    <input
      className={Styles.filterFields}
      id="filter"
      type="text"
      onChange={handleChange}
      name="filter"
      placeholder="Put your query here..."
    />
  </div>
);

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
