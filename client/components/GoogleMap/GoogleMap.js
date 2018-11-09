import React from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import styles from './GoogleMap.css';
import Marker from '../Marker/Marker';
import { GOOGLE_MAP_API } from '../../constants/apiKeys';

const GoogleMap = ({ coordinates, zoom }) => (
  <div className={styles.root}>
    <GoogleMapReact
      bootstrapURLKeys={{
        key: GOOGLE_MAP_API, // my testing api key
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
