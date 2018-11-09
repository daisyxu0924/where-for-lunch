import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';
import { isEmpty } from '../lib/utils';
import { toCondtionParams } from '../lib/conditionHelper';

class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(toCondtionParams(this.props.condition));
  }
  handleOnClickDetails = () => {
    this.props.fetchPlacedetails(this.props.place.id || null);
  }
  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }
  handleOnPriceChange = (price, value) => {
    return (value ? this.props.addPrice({ price }) : this.props.removePrice({ price }));
  }

  handleOnFoodChange = (food, value) => {
    return (value ? this.props.addFood({ food }) : this.props.removeFood({ food }));
  }
  placeInfo = () => {
    const { place } = this.props;
    if (!place.id) return <h2>Where for lunch?</h2>;
    return (
      <div>
        <Place place={place} />
        <Link to={`detail/${place.id}`}>
          <Button onClick={this.handleOnClickDetails} theme="homepageClick" icon={'info'} title='show details' />
        </Link>
      </div>
    );
  }
  render() {
    const { condition } = this.props;
    const findPalceDisabled = isEmpty(condition.latitude);
    return (
      <div className="homePageWrapper">
        { this.placeInfo() }
        <div className="searchWrapper">
          <Condition
            action={this.handleOnConditionChange}
            priceAction={this.handleOnPriceChange}
            foodAction={this.handleOnFoodChange}
            condition={condition} />
          <Button
            disabled={findPalceDisabled}
            onClick={this.handleOnClick}
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
