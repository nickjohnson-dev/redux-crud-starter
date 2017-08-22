import PropTypes from 'prop-types';
import React from 'react';
import h from 'react-hyperscript';

export class App extends React.PureComponent {
  static propTypes = {
    page: PropTypes.string,
  };

  render() {
    return h('.app', [
      this.props.page,
    ]);
  }
}
