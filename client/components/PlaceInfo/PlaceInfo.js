import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlaceInfo.css';

const PlaceInfo = ({ place }) => {
  return (
    <div className={styles.root}>
      <div className={styles.boxInfo}>
        <div>Name: { place.name }</div>
        <div>Address:{ place.address }</div>
        <div>Phone #: { place.phone }</div>
        <div>Types: { place.categories && place.categories.join(', ') }</div>
        <div>Price: { place.price }</div>
        <div>Distance: { place.distance }</div>
        {/* <div>image_url: { place.img }</div> */}
        {/* <div>Url: { place.url }</div> */}
      </div>
    </div>
  );
};

PlaceInfo.propTypes = {
  place: PropTypes.object,
};

export default PlaceInfo;
