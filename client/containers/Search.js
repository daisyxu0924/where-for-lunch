import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from 'components/Button/Button';
import Condition from 'components/Condition/Condition';
import PriceOptions from 'components/PriceOptions/PriceOptions';
import conditionActions from 'actions/conditionActions';
import placeActions from 'actions/placeActions';
import priceOptionsActions from 'actions/priceOptionsActions';

export class Search extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    place: PropTypes.object,
    priceOptions: PropTypes.object,
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

  handleOnFormSubmit = (e) => {
    e.preventDefault();

    this.props.fetchPlaces(this.props.condition);
  };

  render() {
    const { priceOptions, condition } = this.props;
    const disableBtn = !(condition.latitude && condition.longitude);

    return (
      <form className="searchWrapper" onSubmit={this.handleOnFormSubmit}>
        <PriceOptions priceOptions={priceOptions} action={this.handleOnPriceClick}/>
        <Condition condition={condition} action={this.handleOnConditionChange}/>
        <Button theme="homepageClick" disabled={disableBtn} />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  priceOptions: state.priceOptions,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setRadius: conditionActions.setRadius,
    fetchPlaces: placeActions.fetchPlaces,
    setPrices: priceOptionsActions.setPrices,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
