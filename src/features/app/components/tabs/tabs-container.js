import { connect } from 'react-redux';
import location from '../../../location';
import { Tabs } from './tabs';

export const TabsContainer = connect(state => ({
  selectedTab: location.selectors.getPage(state),
}), {
  onPageLoaded: location.actions.pageLoaded,
})(Tabs);
