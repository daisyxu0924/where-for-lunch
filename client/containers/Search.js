import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'components/Button/Button';
import Condition from 'components/Condition/Condition';
import conditionActions from 'actions/conditionActions';
import placeActions from 'actions/placeActions';

export class Search extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    place: PropTypes.object,
    setRadius: PropTypes.func.isRequired,
    fetchPlaces: PropTypes.func.isRequired,
    setPrices: PropTypes.func.isRequired,
  };

  handleOnPriceClick = (value) => {
    this.props.setPrices(value);
  }

  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }

  handleButtonClick = () => {
    const { prices, ...newCondition } = this.props.condition;
    this.props.fetchPlaces({
      ...newCondition,
      price: prices.toString(),
    });
  };

  render() {
    const { condition } = this.props;
    const disableBtn = !(condition.latitude && condition.longitude);

    return (
      <div className="searchWrapper">
        <Condition
          condition={condition}
          action={this.handleOnConditionChange}
          onClickPrice={this.handleOnPriceClick}
        />
        <Button
          theme="homepageClick"
          onClick={this.handleButtonClick}
          disabled={disableBtn}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setRadius: conditionActions.setRadius,
    fetchPlaces: placeActions.fetchPlaces,
    setPrices: conditionActions.setPrices,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
