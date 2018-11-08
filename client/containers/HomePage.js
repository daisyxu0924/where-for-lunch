import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }

  handleOnPriceChange = (price, value) => {
    return (value ? this.props.addPrice({ price }) : this.props.removePrice({ price }));
  }

  handleOnFoodChange = (food, value) => {
    return (value ? this.props.addFood({ food }) : this.props.removeFood({ food }));
  }

  render() {
    const { condition, place } = this.props;
    const findPalceDisabled = isEmpty(condition.latitude);
    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <div className="searchWrapper">
          <Condition
            action={this.handleOnConditionChange}
            priceAction={this.handleOnPriceChange}
            foodAction={this.handleOnFoodChange}
            condition={condition} />
          <Button
            disabled={findPalceDisabled}
            onClick={this.handleOnClick}
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
