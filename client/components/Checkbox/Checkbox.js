import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ value, onChange, title }) => (
  <div className={styles.root}>
    <input type='checkbox' value={value} onChange={onChange} ></input>
    <span>{title}</span>
  </div>
);

Checkbox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  title: PropTypes.string,
};


export default Checkbox;
