import compose from 'lodash/fp/compose';
import isObject from 'lodash/fp/isObject';
import keys from 'lodash/fp/keys';
import map from 'lodash/fp/map';
import startCase from 'lodash/fp/startCase';
import PropTypes from 'prop-types';
import React from 'react';
import h from 'react-hyperscript';
import './datum.scss';

export class Datum extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    datum: PropTypes.object.isRequired,
  };

  render() {
    return h('.datum', {
      className: this.props.className,
    }, [
      ...this.getFields().map(field =>
        h('.datum__field', [
          h('.datum__field__key', [
            startCase(field.key),
          ]),
          h('.datum__field__value', [
            field.value,
          ]),
        ]),
      ),
    ]);
  }

  getFields = () =>
    compose(
      map(key => ({
        value: isObject(this.props.datum[key]) ? h(Datum, {
          datum: this.props.datum[key],
        }) : this.props.datum[key],
        key,
      })),
      keys,
    )(this.props.datum);
}
