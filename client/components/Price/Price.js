import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox/Checkbox';
import styles from './Price.css';

const Price = ({ metricsSelected, selectMetric }) => {
  const metrics = [1, 2, 3, 4];
  return (
    <div className={styles.root}>
      <div className={styles.checkbox}>
        Price:
        {metrics.map( (metric, i) =>
          <Checkbox
            key={i}
            metric={metric}
            selectMetric={selectMetric}
            checked={Boolean(metricsSelected[metric])}/>,
        )}
      </div>
    </div>
  );
};

Price.propTypes = {
  selectMetric: PropTypes.func,
};

export default Price;