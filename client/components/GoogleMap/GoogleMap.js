import React from 'react';
import PropTypes from 'prop-types';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(withGoogleMap(props => {
	return(
		<GoogleMap
		    defaultZoom={14}
		    defaultCenter={{ lat: props.coordinates.latitude, lng: props.coordinates.longitude }}
		  >
		    <Marker
		      position={{ lat: props.coordinates.latitude, lng: props.coordinates.longitude }}
		    />
		</GoogleMap>
	);
}));
export default MapWithAMarker;