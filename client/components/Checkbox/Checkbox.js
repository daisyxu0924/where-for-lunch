import React from 'react';
import PropTypes from 'prop-types';
import styles from './Checkbox.css';

const Checkbox = ({ onChangeAction, name, defaultChecked }) => (
  <div className={styles.root}>
    <input
      type="checkbox"
      onChange={onChangeAction}
      name={name}
      defaultChecked={defaultChecked} />
  </div>
);

Checkbox.propTypes = {
  onChangeAction: PropTypes.func,
  name: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

export default Checkbox;
