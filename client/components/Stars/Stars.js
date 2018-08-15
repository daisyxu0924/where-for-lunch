import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Stars.css';

class Stars extends PureComponent {
  static propTypes = {
    rating: PropTypes.number,
  };

  render() {
    const { rating } = this.props;
    return (
      <span className={styles.root}>
        {
          rating &&
          <div className={styles.rating}>
            <div className={styles.stars}>
              <div className={styles.emptyStars}></div>
              <div className={styles.fullStars} style={{ width: `${rating / 5 * 100}%` }}></div>
            </div>
          </div>
        }
      </span>
    );
  }
}

export default Stars;
