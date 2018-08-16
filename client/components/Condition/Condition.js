import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import LabelCheckbox from 'components/LabelCheckbox/LabelCheckbox';
import { priceOptionsData } from 'constants/PriceOptions';
import styles from './Condition.css';

class Condition extends PureComponent {
  static propTypes = {
    condition: PropTypes.object.isRequired,
    action: PropTypes.func.isRequired,
    onClickPrice: PropTypes.func.isRequired,
  };

  handleOnBlurAction = (e) => {
    this.props.action(e.target.value);
  }

  handleClickPrice = ({ target: { value } }) => {
    this.props.onClickPrice(value);
  }

  render() {
    const { condition } = this.props;
    let isChecked = false;

    return (
      <div className={styles.root}>
        <div className={styles.priceOptions}>
          <p>Price Options:</p>
          {
            priceOptionsData.map((price) => {
              isChecked = (condition.prices.indexOf(price.value.toString()) > -1);
              return (
                <LabelCheckbox
                  key={price.value}
                  checked={isChecked}
                  label={price.label}
                  name="price-options"
                  onClick={this.handleClickPrice}
                  value={price.value}
                />
              );
            })}
        </div>

        <div className={styles.radius}>
          <span>Radius:</span>
          <Input defaultValue={condition.radius} onBlurAction={this.handleOnBlurAction}/>
          <span>meters</span>
        </div>
      </div>
    );
  }
}

export default Condition;
