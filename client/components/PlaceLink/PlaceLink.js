import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Place from 'components/Place/Place';
import styles from './PlaceLink.css';

const PlaceLink = (props) => {
  return (
    <Link to={`/details/${props.place.id}`} className={styles.root}>
      <Place {...props}/>
    </Link>
  );
};

PlaceLink.propTypes = {
  place: PropTypes.object.isRequired,
};

export default PlaceLink;
