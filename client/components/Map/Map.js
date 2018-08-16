import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Map.css';

class Map extends PureComponent {
  static defaultProps = {
    zoom: 15, // Streets
  };

  static propTypes = {
    coordinates: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
    }),
    zoom: PropTypes.number,
  };

  state = {
    showMap: false,
  }

  componentDidMount() {
    if (this.props.coordinates && window.google) {
      const { latitude, longitude } = this.props.coordinates;
      const coordinatesObj = { lat: latitude, lng: longitude };

      this.map = new window.google.maps.Map(
        document.getElementById('map'),
        {
          center: coordinatesObj,
          zoom: 15,
        },
      );

      this.marker = new window.google.maps.Marker({
        position: coordinatesObj, map: this.map,
      });

      this.setState({ showMap: true });
    }
  }

  render() {
    return (
      <div className={styles.root}>
        <div id="map" hidden={!this.state.showMap}/>
      </div>
    );
  }
}

export default Map;
