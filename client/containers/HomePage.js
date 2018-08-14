import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Place from 'components/Place/Place';
import Search from 'containers/Search';

export class HomePage extends PureComponent {
  static propTypes = {
    place: PropTypes.object,
  };

  render() {
    const { place } = this.props;

    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <Search />
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
