import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './CheckboxGroup.css';
import Checkbox from '../Checkbox/Checkbox';

class CheckboxGroup extends PureComponent {
  generateCheckbox = (data, value) => {
    return <li key={data.alias}>
      <Checkbox
        title={ data.title }
        onChange={e => this.action(data.alias, e.target.checked)}
        isChecked={value}
        value={data.alias}
      />
    </li>;
  }

  action = (key, value) => this.props.changeFood({ key, value });

  lists = () => {
    const { data: { dataSet, selected = [] } } = this.props;
    return dataSet.map(data => this.generateCheckbox(data, selected.indexOf(data.alias) >= 0));
  }

  render() {
    const { title } = this.props;
    return (
      <div className={styles.root}>
        <span>{ title }</span>
        <ul >
          { this.lists() }
        </ul>
      </div>
    );
  }
}

CheckboxGroup.propTypes = {
  changeFood: PropTypes.func,
  data: PropTypes.object,
  title: PropTypes.string,
};

export default CheckboxGroup;

