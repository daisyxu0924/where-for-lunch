import React from 'react';
import LabelCheckbox from 'components/LabelCheckbox/LabelCheckbox';
import { priceOptionsData } from 'constants/PriceOptions';

const PriceOptions = () => {
  return (
    <div>
      <p>Price Options:</p>
      {priceOptionsData.map((price) => {
        return (
          <LabelCheckbox
            key={price.value}
            label={price.label}
            name="price-options"
            value={price.value}
          />
        );
      })}
    </div>
  );
};

export default PriceOptions;
