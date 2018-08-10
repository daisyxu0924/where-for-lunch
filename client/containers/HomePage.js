import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';
import Price from 'components/Price/Price';
import { objectTostring } from 'lib/utils';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      metricsSelected: {},
    };
    this.selectMetric = this.selectMetric.bind(this);
  }

  selectMetric(metric) {
    this.setState(({ metricsSelected, nextProps }) => ({
      metricsSelected: {
        ...metricsSelected,
        [metric]: !metricsSelected[metric],
      },
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.metricsSelected !== prevState.metricsSelected) {
      this.props.setPrice(objectTostring(this.state.metricsSelected));
    }
  }

  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  handleOnClickTitle = (param) => {
    console.log(param);
    //this.props.history.push(`/place-details/`);
  }

  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }
  render() {
    const { condition, place } = this.props;
    let btnStatus = true;
    if (condition.latitude) {
      btnStatus = false;
    }
    return (
      <div className="homePageWrapper">
        <Place place={place} moreDetails={this.handleOnClickTitle} />
        <div className="searchWrapper">
          <Price metricsSelected={this.state.metricsSelected} selectMetric={this.selectMetric} />
          <Condition condition={condition} action={this.handleOnConditionChange} />
          <Button onClick={this.handleOnClick} btnStatus={btnStatus} theme="homepageClick" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaces: placeActions.fetchPlaces,
    setRadius: conditionActions.setRadius,
    setPrice: conditionActions.setPrice,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  setPrice: PropTypes.func,
  btnStatus: PropTypes.bool,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
