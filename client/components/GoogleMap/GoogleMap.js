import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import styles from './GoogleMap.css';
import Marker from '../Marker/Marker';

const GoogleMap = ({ coordinates, zoom }) => (
  <div className={styles.root}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: 'AIzaSyCYDM_gyqp1UGVClhh05ek_4G0zr4n55xA', // my testing api key
      }}
      defaultCenter={coordinates}
      defaultZoom={ zoom }>
      <Marker {...coordinates} />
    </GoogleMapReact>
  </div>
);


GoogleMap.propTypes = {
  coordinates: PropTypes.object,
  zoom: PropTypes.number,
};

GoogleMap.defaultProps = {
  zoom: 18,
};

export default GoogleMap;
