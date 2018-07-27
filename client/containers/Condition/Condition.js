import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import conditionActions from 'actions/conditionActions';
import Input from 'components/Input/Input';
import Checkbox from 'components/Checkbox/Checkbox';
import { isCategoryChecked } from 'lib/utils';
import styles from './Condition.css';

class Condition extends Component {
  constructor() {
    super();
    this.choices = {
      chinese: 'Chinese',
      australian: 'Australian',
      filipino: 'Filipino',
      italian: 'Italian',
      japanese: 'Japanese',
      korean: 'Korean',
      mexican: 'Mexican',
      french: 'French',
      malaysian: 'Malaysian',
    };
  }

  handleOnChangeAction = (e) => {
    const { checked, name } = e.target;
    if (checked) {
      this.props.addCategory(name);
    } else {
      this.props.removeCategory(name);
    }
  }

  handleOnBlurAction = (e) => {
    this.props.setRadius(e.target.value);
  }

  render() {
    const { condition: { radius, categories } } = this.props;
    return (
      <div className={styles.root}>
        <span>radius:</span>
        <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction} />
        <span>meters</span>
        <div className={styles.filters}>
          {Object.keys(this.choices).map(item => (
            <div key={item}>
              <Checkbox
                onChangeAction={this.handleOnChangeAction}
                name={item}
                defaultChecked={isCategoryChecked(categories, item)} />
              <label>{this.choices[item]}</label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setRadius: conditionActions.setRadius,
    addCategory: conditionActions.addCategory,
    removeCategory: conditionActions.removeCategory,
  }, dispatch);

Condition.propTypes = {
  condition: PropTypes.object,
  setRadius: PropTypes.func,
  addCategory: PropTypes.func,
  removeCategory: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Condition);
