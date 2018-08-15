import React from 'react';
import PropTypes from 'prop-types';
import styles from './Place.css';

const Place = ({ place }) => {
  const hasDetails = Object.keys(place).length !== 0;
  const containerClass = (hasDetails) ? styles.clickable : styles.root;

  return (
    <div className={containerClass}>
      <div className={styles.name}>{ place.name || 'Where for lunch?' }</div>
      <div className={styles.box}>
        <div>{ place.address }</div>
        <div>{ place.phone }</div>
        <div>{ place.categories && place.categories.join(', ') }</div>
        <div>{ place.price }</div>
        {
          place.rating &&
          <div className={styles.rating}>
            <div className={styles.ratingScore}>{ place.reviewCount } reviews</div>
            <div className={styles.stars}>
              <div className={styles.emptyStars}></div>
              <div className={styles.fullStars} style={{ width: `${place.rating / 5 * 100}%` }}></div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

Place.propTypes = {
  place: PropTypes.object,
};

export default Place;
