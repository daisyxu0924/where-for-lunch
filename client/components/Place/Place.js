import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Place.css';

export default class Place extends PureComponent {
  render() {
    const { place, moreDetails } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.name}>{ place.name || 'Where for lunch?' }</div>
        <div className={styles.box}>
          <div><Link to={{ pathname: `/place-details/${place.id}`}} >{ place.address }</Link></div>
          <div>{ place.phone }</div>
          <div>{ place.categories && place.categories.join(', ') }</div>
          <div>{ place.price }</div>
          { place.rating &&
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
  }
};

Place.propTypes = {
  place: PropTypes.object,
  moreDetails: PropTypes.func,
};