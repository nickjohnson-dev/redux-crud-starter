import compose from 'lodash/fp/compose';
import isBoolean from 'lodash/fp/isBoolean';
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
        value: getValue(this.props.datum[key]),
        key,
      })),
      keys,
    )(this.props.datum);
}

function getValue(datum) {
  if (isObject(datum)) {
    return h(Datum, {
      datum,
    });
  }

  if (isBoolean(datum)) {
    return String(datum);
  }

  return datum;
}
