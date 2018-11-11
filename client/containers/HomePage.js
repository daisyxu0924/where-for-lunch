import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import { ConditionRedux } from 'components/Condition/Condition';
import { isEmpty } from '../lib/utils';
import { toCondtionParams } from '../lib/conditionHelper';
import Messages from '../components/Messages/Messages';

class HomePage extends Component {
  handleOnClickFindPlace = () => this.props.fetchPlaces(toCondtionParams(this.props.condition));

  handleOnClickDetails = () => this.props.fetchPlacedetails(this.props.place.id || null);

  placeInfo = (place) => {
    if (place.error) return <Messages message={ place.error } />;

    return (place.id ?
      <div>
        <Place place={place} />
        <Link to={`detail/${place.id}`}>
          <Button
            icon={'info'}
            onClick={this.handleOnClickDetails}
            theme="homepageClick"
            title='show details' />
        </Link>
      </div> : <h2>Where for lunch?</h2>
    );
  }

  render() {
    const { condition, place } = this.props;
    const findPalceDisabled = isEmpty(condition.latitude);
    return (
      <div className="homePageWrapper">
        { this.placeInfo(place) }
        <div className="searchWrapper">
          <ConditionRedux />
          <Button
            disabled={findPalceDisabled}
            onClick={this.handleOnClickFindPlace}
            title={'Find Place'}
            theme="homepageClick" />
        </div>
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
    fetchPlaces: placeActions.fetchPlaces,
    fetchPlacedetails: placeActions.fetchPlacedetails,
    setRadius: conditionActions.setRadius,
    addPrice: conditionActions.addPrice,
    removePrice: conditionActions.removePrice,
    addFood: conditionActions.addFood,
    removeFood: conditionActions.removeFood,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  fetchPlacedetails: PropTypes.func,
  setRadius: PropTypes.func,
  addPrice: PropTypes.func,
  removePrice: PropTypes.func,
  addFood: PropTypes.func,
  removeFood: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
