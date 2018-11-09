import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link, withRouter } from 'react-router-dom';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import Place from 'components/Place/Place';
import Photo from '../components/Photo/Photo';
import PlaceInfo from '../components/PlaceInfo/PlaceInfo';
import { isEmpty } from '../lib/utils';
import { newWindow } from '../lib/navigatorHelper';
import GoogleMap from '../components/GoogleMap/GoogleMap';

class BusinessPage extends Component {
  state = { showMap: false }

  handleOnClickShowMap = () => this.setState({ showMap: true });

  handleOnClickGotoLink = () => newWindow(this.props.place.url);

  handleOnClickBack = () => this.props.history.goBack();

  componentDidMount = () => this.props.fetchPlacedetails(this.props.place.id || this.props.match.params.id)
    && window.scrollTo(0, 200); // added this for u to see the changes that there add at the bottom

  render() {
    const { place } = this.props;
    const gmapCoordinate = isEmpty(place.coordinates ? place.coordinates.lat : null);
    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <Link to={`detail/${place.id}`}>
          <Button
            icon={'back'}
            onClick={this.handleOnClickBack}
            theme="BusinessPage"
            title='Back' />
        </Link>
        <Button
          icon={'page'}
          onClick={this.handleOnClickGotoLink}
          theme="BusinessPage"
          title='Visit Website' />
        <Button
          icon={'map'}
          onClick={this.handleOnClickShowMap}
          theme="BusinessPage"
          title='Show Map'
          disabled={gmapCoordinate} />
        { this.state.showMap ? <GoogleMap coordinates={place.coordinates}/> : null }
        <PlaceInfo place={place} />
        <Photo place={place} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlacedetails: placeActions.fetchPlacedetails,
  }, dispatch);

BusinessPage.propTypes = {
  fetchPlacedetails: PropTypes.func,
  history: PropTypes.object,
  place: PropTypes.object,
  match: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(BusinessPage));
