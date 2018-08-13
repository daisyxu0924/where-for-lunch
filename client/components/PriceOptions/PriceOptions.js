import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LabelCheckbox from 'components/LabelCheckbox/LabelCheckbox';
import { priceOptionsData } from 'constants/PriceOptions';

class PriceOptions extends PureComponent {
  static propTypes = {
    priceOptions: PropTypes.object.isRequired,
    action: PropTypes.func.isRequired,
  };

  handleClickCheckbox = ({ target: { value } }) => {
    this.props.action(value);
  }

  render() {
    const { priceOptions } = this.props;
    let isChecked = false;

    return (
      <div>
        <p>Price Options:</p>
        {priceOptionsData.map((price) => {
          isChecked = (priceOptions.selected.indexOf(price.value.toString()) > -1);
          return (
            <LabelCheckbox
              key={price.value}
              checked={isChecked}
              label={price.label}
              name="price-options"
              onClick={this.handleClickCheckbox}
              value={price.value}
            />
          );
        })}
      </div>
    );
  }
}

export default PriceOptions;
