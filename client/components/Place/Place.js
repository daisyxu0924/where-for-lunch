import React from 'react';
import PropTypes from 'prop-types';
import Stars from 'components/Stars/Stars';
import styles from './Place.css';

const Place = ({ place }) => {
  return (
    <div className={styles.root}>
      <div className={styles.name}>{ place.name || 'Where for lunch?' }</div>
      <div className={styles.box}>
        <div>{ place.address }</div>
        <div>{ place.phone }</div>
        <div>{ place.categories && place.categories.join(', ') }</div>
        <div>{ place.price }</div>
        {place.rating && <div className={styles.ratingScore}>{ place.reviewCount } reviews</div>}
        <Stars rating={place.rating}/>
      </div>
    </div>
  );
};

Place.propTypes = {
  place: PropTypes.object,
};

export default Place;
