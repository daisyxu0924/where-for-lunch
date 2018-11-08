import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import styles from './Condition.css';
import Checkbox from '../Checkbox/Checkbox';
import priceList from '../../variables/priceList';
import foodList from '../../variables/foodList';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
    priceAction: PropTypes.func,
    foodAction: PropTypes.func,
  };
  generateCheckbox = (action, data) => {
    return <li key={data.alias}><Checkbox title={data.title} onChange={e => action(data.alias, e.target.checked)} /></li>;
  }
  priceCheckboxes = (data) => {
    return this.generateCheckbox(this.props.priceAction, data);
  }
  foodCheckboxes = (data) => {
    return this.generateCheckbox(this.props.foodAction, data);
  }
  handleOnBlurAction = (e) => {
    this.props.action(e.target.value);
  }
  render() {
    const { condition: { radius } } = this.props;
    return (
      <div className={styles.root}>
        <span>FOODS:</span>
        <ul >
          { foodList.map(food => this.foodCheckboxes(food)) }
        </ul>
        <span>PRICES:</span>
        <ul>
          { priceList.map(price => this.priceCheckboxes(price)) }
        </ul>
        <div>
          <span>radius:</span>
          <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
          <span>meters</span>
        </div>
      </div>
    );
  }
}
