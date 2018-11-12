import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.css';

const Loading = ({ text = 'Loading...' }) => (
  <div className={styles.root}>
    <h4>{ text }</h4>
  </div>
);

Loading.propTypes = {
  text: PropTypes.string,
};

export default Loading;
