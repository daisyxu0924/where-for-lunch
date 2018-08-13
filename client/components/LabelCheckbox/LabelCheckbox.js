import React from 'react';
import PropTypes from 'prop-types';
import styles from './LabelCheckbox.css';

const LabelCheckbox = ({ checked, label, name, onClick, value }) => (
  <label className={styles.root}>
    <input
      type="checkbox"
      name={name}
      onClick={onClick}
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
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

LabelCheckbox.defaultProps = {
  checked: false,
};

export default LabelCheckbox;
