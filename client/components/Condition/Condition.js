import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import conditionActions from 'actions/conditionActions';
import Input from 'components/Input/Input';
import styles from './Condition.css';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import priceList from '../../variables/priceList';
import foodList from '../../variables/foodList';

class Condition extends PureComponent {
  render() {
    const { condition: { radius, prices, foods }, setRadius, addFood, addPrice, removeFood, removePrice } = this.props;
    return (
      <div className={styles.root}>
        <CheckboxGroup
          title={'Foods'}
          data={{ dataSet: foodList, selected: foods }}
          add={addFood}
          remove={removeFood}
        />
        <CheckboxGroup
          title={'Prices'}
          data={{ dataSet: priceList, selected: prices }}
          add={addPrice}
          remove={removePrice}
        />
        <div>
          <span>radius:</span>
          <Input defaultValue={radius} onBlurAction={setRadius}></Input>
          <span>meters</span>
        </div>
      </div>
    );
  }
}

Condition.propTypes = {
  condition: PropTypes.object,
  setRadius: PropTypes.func,
  addPrice: PropTypes.func,
  removePrice: PropTypes.func,
  addFood: PropTypes.func,
  removeFood: PropTypes.func,
};

const mapStateToProps = state => ({
  condition: state.condition,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setRadius: conditionActions.setRadius,
    addPrice: conditionActions.addPrice,
    removePrice: conditionActions.removePrice,
    addFood: conditionActions.addFood,
    removeFood: conditionActions.removeFood,
  }, dispatch);

// for test
export default Condition;

// for component use
export const ConditionRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Condition);
