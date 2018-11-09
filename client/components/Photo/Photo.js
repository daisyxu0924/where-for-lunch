import React from 'react';
import PropTypes from 'prop-types';
import styles from './Photo.css';

const Photo = ({ place }) => {
  return (
    <div className={styles.root}>
      { place && place.photos && place.photos.length > 0 &&
      <div >
        {place.photos.map((p, i) => <img key={i} src={ p } alt="" className={styles.photo}/>)}
      </div>
      }
    </div>
  );
};

Photo.propTypes = {
  place: PropTypes.object,
};

export default Photo;
