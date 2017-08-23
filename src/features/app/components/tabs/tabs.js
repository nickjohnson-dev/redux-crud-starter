import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import h from 'react-hyperscript';
import './tabs.scss';

export class Tabs extends React.PureComponent {
  static propTypes = {
    onPageLoaded: PropTypes.func,
    selectedTab: PropTypes.string,
  };

  render() {
    return h('.tabs', [
      ...this.getTabs().map(tab =>
        h('.tabs__tab', {
          className: classnames({
            'tabs__tab--active': tab === this.props.selectedTab,
          }),
          onClick: () => this.props.onPageLoaded(tab),
        }, [
          tab,
        ]),
      ),
    ]);
  }

  getTabs = () => [
    'posts',
    'comments',
    'albums',
    'photos',
    'todos',
    'users',
  ];
}
