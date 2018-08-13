import React from 'react';
import LabelCheckbox from 'components/LabelCheckbox/LabelCheckbox';

const priceOptionsData = [
  {
    value: 1,
    label: '$',
  },
  {
    value: 2,
    label: '$$',
  },
  {
    value: 3,
    label: '$$$',
  },
  {
    value: 4,
    label: '$$$$',
  },
];

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
