import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ metric, selectMetric, checked }) => {
  return (
    <label>
      <input
        type='checkbox'
        name={metric}
        checked={checked}
        onChange={() => selectMetric(metric)} 
       />
       {metric}
    </label>
  )
}

Checkbox.propTypes = {
  selectMetric: PropTypes.func,
  metric: PropTypes.number,
  checked: PropTypes.bool,
};

export default Checkbox;