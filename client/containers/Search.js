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
  };

  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }

  handleOnFormSubmit = (e) => {
    e.preventDefault();

    this.props.fetchPlaces(this.props.condition);
  };

  render() {
    const { condition } = this.props;
    const disableBtn = !(condition.latitude && condition.longitude);

    return (
      <form className="searchWrapper" onSubmit={this.handleOnFormSubmit}>
        <Condition condition={condition} action={this.handleOnConditionChange}/>
        <Button theme="homepageClick" disabled={disableBtn} />
      </form>
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
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
