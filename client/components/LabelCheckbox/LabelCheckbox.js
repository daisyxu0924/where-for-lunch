import React from 'react';
import PropTypes from 'prop-types';
import styles from './LabelCheckbox.css';

const LabelCheckbox = ({ checked, label, name, value }) => (
  <label className={styles.root}>
    <input
      type="checkbox"
      name={name}
      value={value}
      checked={checked}
    />
    { label }
  </label>
);

LabelCheckbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

LabelCheckbox.defaultProps = {
  checked: false,
};

export default LabelCheckbox;
