import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Button extends Component {
  state = {};

  render() {
    const { data } = this.props;
    return (
      <a className="btn btn-info m-3" href="/try">
        {data}
      </a>
    );
  }
}

Button.propTypes = {
  data: PropTypes.string,
};

Button.defaultProps = {
  data: 'Empty button',
};

export default Button;
