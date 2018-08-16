import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Stars from 'components/Stars/Stars';
import Map from 'components/Map/Map';
import classNames from 'classnames/bind';
import styles from './PlaceDetails.css';

class PlaceDetails extends PureComponent {
  static propTypes = {
    place: PropTypes.object.isRequired,
  };

  render() {
    const { place } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: true,
    };
    const isOpenData = (!place.is_closed) ?
      { text: 'OPEN', style: styles.green } :
      { text: 'CLOSED', style: styles.red };

    return (
      <section className={styles.root}>
        <header className={styles.header}>
          <h1>
            {place.name}
            <span className={classNames({
              [styles.badge]: true,
              [isOpenData.style]: true,
            })}>{isOpenData.text}</span>

            {
              place.is_claimed && (
                <span className={classNames({
                  [styles.badge]: true,
                  [styles.blue]: true,
                })}>CLAIMED</span>
              )
            }
          </h1>
          {
            place.rating && (
              <div>
                <span>{place.review_count} reviews</span>
                <Stars rating={place.rating}/>
              </div>
            )
          }
          <span>{place.price}</span>
          <p>
            {
              place.categories && place.categories.map(item => item.title).join(', ')
            }
          </p>

        </header>

        <div className={styles.row}>
          <div className={styles.contactDetails}>
            {
              place.display_phone && (
                <p>
                  Contact:&nbsp;
                  <a href={`tel:${place.phone}`}>
                    { place.display_phone }
                  </a>
                </p>
              )
            }

            <p>
              Address:&nbsp;
              { place.location && place.location.display_address.join(', ') }
            </p>

            <Map coordinates={place.coordinates}/>
          </div>

          {
            place.photos && place.photos.length > 0 && (
              <div className={styles.photos}>
                <Slider {...settings}>
                  {place.photos.map(src => (
                    <div key={src}>
                      <img src={src} />
                    </div>
                  ))}
                </Slider>
              </div>
            )
          }

        </div>
      </section>
    );
  }
}

export default PlaceDetails;
