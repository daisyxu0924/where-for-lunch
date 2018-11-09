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
  state = {
    showMap: false,
  }
  handleOnClickShowMap = () => {
    this.setState({ showMap: true });
  }
  handleOnClickGotoLink = () => {
    newWindow(this.props.place.url);
  }
  handleOnClickBack = () => {
    this.props.history.goBack();
  }
  componentDidMount = () => {
    this.props.fetchPlacedetails(this.props.place.id || this.props.match.params.id);
    window.scrollTo(0, 200); // added this for u to see the changes that there add at the bottom
  }
  render() {
    const { place } = this.props;
    const gmapCoordinate = isEmpty(place.coordinates ? place.coordinates.lat : null);
    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <Link to={`detail/${place.id}`}>
          <Button onClick={this.handleOnClickBack} theme="BusinessPage" icon={'back'} title='Back' />
        </Link>
        <Button onClick={this.handleOnClickGotoLink} theme="BusinessPage" icon={'page'} title='Visit Website' />
        <Button onClick={this.handleOnClickShowMap} theme="BusinessPage" icon={'map'} title='Show Map' disabled={gmapCoordinate} />
        {this.state.showMap ? <GoogleMap coordinates={place.coordinates}/> : null }
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
  place: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object,
  fetchPlacedetails: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(BusinessPage));
