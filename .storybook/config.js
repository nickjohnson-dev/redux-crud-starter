/* eslint-disable global-require */
import { configure } from '@storybook/react';

const storyRequireContext = require.context('../src/features', true, /.(story|stories).js$/);

function loadStories() {
  require('../src/styles/index.scss');
  storyRequireContext.keys().forEach(filename => storyRequireContext(filename));
}

configure(loadStories, module);
