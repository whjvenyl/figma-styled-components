import { configure } from '@storybook/react';


function loadStories() {
  require('../stories/index.tsx');
  // You can require as many stories as you need.
}

configure(loadStories, module);



configure(require.context('../src', true, /\.stories\.(js|ts|tsx|mdx)$/), module);
