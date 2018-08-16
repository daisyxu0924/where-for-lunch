import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import placeActions from 'actions/placeActions';
import PlaceDetails from 'components/PlaceDetails/PlaceDetails';

export class Details extends PureComponent {
  static defaultProps = {
    place: {},
  };

  static propTypes = {
    fetchDetails: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    setDetails: PropTypes.func.isRequired,
    place: PropTypes.object,
  };

  state = {
    hasError: false,
  };

  componentDidMount() {
    const { fetchDetails, match: { params } } = this.props;
    fetchDetails(params.placeid);
  }

  render() {
    if (this.props.loading) {
      return (
        <span>Loading...</span>
      );
    }

    return (
      <PlaceDetails place={this.props.place} />
    );
  }
}

const mapStateToProps = state => ({
  place: state.place.details,
  loading: state.place.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    setDetails: placeActions.setDetails,
    fetchDetails: placeActions.fetchDetails,
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
