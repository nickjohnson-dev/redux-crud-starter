import PropTypes from 'prop-types';
import React from 'react';
import h from 'react-hyperscript';
import { Datum } from '../datum/datum';
import './app.scss';

export class App extends React.PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
  };

  render() {
    return h('.app', [
      h('.app__data', [
        ...this.props.data.map(datum =>
          h(Datum, {
            className: 'app__data__datum',
            key: datum.id,
            datum,
          }),
        ),
      ]),
    ]);
  }
}
