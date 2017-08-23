import PropTypes from 'prop-types';
import React from 'react';
import h from 'react-hyperscript';
import { Datum } from '../datum/datum';
import './data.scss';

export class Data extends React.PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
  };

  render() {
    return h('.data', [
      ...this.props.data.map(datum =>
        h(Datum, {
          className: 'data__datum',
          key: datum.id,
          datum,
        }),
      ),
    ]);
  }
}
