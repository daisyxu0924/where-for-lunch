import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import SVGInline from 'react-svg-inline';
import styles from './style.css';

class Button extends Component {
  state = {
    showError: false,
  }

  onClick = () => {
    this.setState({
      showError: true,
    });
  }

  renderButtonContent() {
    return (
      <Fragment>
        { this.renderIcon() }
        <div className={styles.buttonLabel}>{this.props.children}</div>
      </Fragment>
    );
  }

  renderIcon() {
    const { icon } = this.props;

    if (!icon) {
      return false;
    }

    return (
      icon.startsWith('<svg ')
        ? <SVGInline className={styles.icon} svg={icon} key="icon" /> /* Consider to remove this, all buttons are now using font as icon */
        : <i className={classNames(icon, styles.icon)} key="icon" />
    );
  }

  renderAnchorLink(commonProps) {
    const { errorMessage, hasErrorMessage } = this.props;

    if (!hasErrorMessage) {
      return this.renderNormalAnchorLink(commonProps);
    }

    return (
      <div onClick={this.onClick}>
        { this.state.showError && <span>{errorMessage}</span> }
        { this.renderNormalAnchorLink(commonProps) }
      </div>
    );
  }

  renderNormalAnchorLink(commonProps) {
    // javascript:; to make <a> tabbable
    return <a ref={this.props.setFocusRef} href="javascript:;" {...commonProps}>{this.renderButtonContent()}</a>; // eslint-disable-line
  }

  render() {
    const {
      id,
      className,
      disabled,
      hasErrorMessage,
      icon,
      onClick,
      onMouseEnter,
      onMouseLeave,
      selected,
      setCurrentQuestion,
      theme,
      url,
    } = this.props;
    const { inactive = false } = this.context;
    const themes = theme.split(' ');
    const isInputButton = themes.includes('inputButton');
    const rootStyle = classNames.bind(styles, [className])('base', themes, {
      disabled: disabled || hasErrorMessage,
      withIcon: !!icon,
      inactive,
      selected,
      active: isInputButton && !inactive && !selected,
      selectedActiveInputButton: selected && !inactive,
    });
    const commonProps = {
      id,
      className: rootStyle,
      onMouseEnter,
      onMouseLeave,
      onFocus: setCurrentQuestion,
    };

    if (onClick) {
      commonProps.onClick = onClick;
    }

    return (
      url
        ? <Link to={url} {...commonProps}>{this.renderButtonContent()}</Link>
        : this.renderAnchorLink(commonProps)
    );
  }
}

Button.propTypes = {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  hasErrorMessage: PropTypes.bool,
  icon: PropTypes.string,
  theme: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  className: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
  transition: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  selected: PropTypes.bool,
  setFocusRef: PropTypes.func,
  setCurrentQuestion: PropTypes.func,
};

Button.defaultProps = {
  disabled: false,
  icon: '',
  selected: false,
  theme: '',
};

Button.contextTypes = {
  inactive: PropTypes.bool,
};

Button.animationProps = {
  className: styles.row,
  component: 'div',
  transitionName: 'popAndPulse',
  transitionEnterTimeout: 320,
  transitionLeaveTimeout: 320,
};

export default Button;
