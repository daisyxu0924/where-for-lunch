import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';
import { hasCoordinate } from '../lib/utils';
import Loading from '../components/Loading/Loading';
import Messages from '../components/Messages/Messages';

class HomePage extends Component {
  handleOnClickFindPlace = () => this.props.fetchPlaces(this.props.condition);

  placeInfo = (place) => {
    if (place.loading) return <Loading />;
    if (place.error) return <Messages message={ place.error } />;
    return (place.id ?
      <div>
        <Place place={place} />
      </div> : <h2>Where for lunch?</h2>
    );
  }
  render() {
    const { condition, place, changeFood, setRadius } = this.props;
    const findPalceDisabled = !hasCoordinate(condition.latitude, condition.longitude);

    return (
      <div className="homePageWrapper">
        { this.placeInfo(place) }
        <div className="searchWrapper">
          <Condition {...{ condition, changeFood, setRadius }} />
          <Button
            disabled={findPalceDisabled}
            icon={'foodPlace'}
            onClick={this.handleOnClickFindPlace}
            title={'Find Place'} />
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
    setRadius: conditionActions.setRadius,
    changeFood: conditionActions.changeFood,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  changeFood: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
