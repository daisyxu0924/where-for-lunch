import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleMap from 'components/GoogleMap/GoogleMap';
import placeActions from 'actions/placeActions';
import styles from './PlaceDetails.css';

class PlaceDetails extends Component {

  componentDidMount() {
    this.props.fetchPlaceDetails(this.props.match.params.id);
  }

  render() {
    const details = this.props.placeDetails;
    let images = null;
    if (details.photos) {
        images = details.photos.map(image => {
           return <img key={image} src={image} />
        }); 
    }

    return (
      <div>
        <div className={styles.root}>
          <div className={styles.box}>
            <div>{ details.address }</div>
            <div>{ details.phone }</div>
            <div>{ details.categories }</div>
            <div>{ details.price }</div>
            { details.coordinates ? <GoogleMap coordinates={details.coordinates} googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places" loadingElement={<div style={{ height: `100%` }} />} containerElement={<div style={{ height: `400px` }} />} mapElement={<div style={{ height: `100%` }} />} /> : null }
            {images}
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  placeDetails: state.placeDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaceDetails: placeActions.fetchPlaceDetails,
  }, dispatch);

PlaceDetails.propTypes = {
  place: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaceDetails);