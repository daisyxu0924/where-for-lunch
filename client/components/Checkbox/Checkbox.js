import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ value, onChange, title, isChecked }) => (
  <div className={styles.root}>
    <input type='checkbox' value={value} checked={isChecked} onChange={onChange} />
    <span>{title}</span>
  </div>
);

Checkbox.propTypes = {
  value: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func,
  title: PropTypes.string,
};

export default Checkbox;
