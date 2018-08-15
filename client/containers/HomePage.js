import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Place from 'components/Place/Place';
import PlaceLink from 'components/PlaceLink/PlaceLink';
import Search from 'containers/Search';
import Details from 'containers/Details';

export class HomePage extends PureComponent {
  static propTypes = {
    place: PropTypes.object,
    match: PropTypes.object,
  };

  render() {
    const { place } = this.props;
    const PlaceComponent = place.id ?
      <PlaceLink place={place} /> :
      <Place place={place} />;

    return (
      <div className="homePageWrapper">
        <Route path="/" exact component={ () => PlaceComponent } />
        <Route path="/" exact component={ Search } />

        <Route path="/details/:placeid" exact component={Details} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});

export default connect(
  mapStateToProps,
)(HomePage);
