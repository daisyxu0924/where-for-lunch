import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import styles from './Condition.css';
import CheckboxGroup from '../CheckboxGroup/CheckboxGroup';
import foodList from '../../variables/foodList';

export default class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object,
    setRadius: PropTypes.func,
    changeFood: PropTypes.func,
  };

  render() {
    const { condition: { radius, foods }, setRadius, changeFood } = this.props;
    return (
      <div className={styles.root}>
        <CheckboxGroup
          title={'Foods'}
          data={{ dataSet: foodList, selected: foods }}
          changeFood={changeFood}
        />
        <div>
          <span>radius:</span>
          <Input defaultValue={radius} onBlurAction={e => setRadius(e.target.value)}></Input>
          <span>meters</span>
        </div>
      </div>
    );
  }
}

