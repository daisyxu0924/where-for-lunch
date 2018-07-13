import React from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';

const Header = ({ showRefreshButton, handleRefresh }) => (
  <header
    className="header"
  >
    <div className="header__content">
      <h1
        className="header__content__title"
      >
        Where to Lunch
      </h1>

      {showRefreshButton &&
        <button
          className="header__content__reload"
          onClick={handleRefresh}
        >
          <Icon
            name="refresh"
          />
        </button>
      }
    </div>
  </header>
);

Header.propTypes = {
  showRefreshButton: PropTypes.bool.isRequired,
  handleRefresh: PropTypes.func.isRequired
};

export default Header;
