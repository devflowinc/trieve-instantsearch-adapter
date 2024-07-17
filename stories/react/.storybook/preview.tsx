import React from 'react';
import type { Preview } from '@storybook/react';
import Playgrond from '../src/components/Playground';
import TrieveInstantsearchProvider from '../src/components/TrieveInstantsearchProvider';

import './css/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, { parameters }) => {
      console.log(parameters);
      return (
        <TrieveInstantsearchProvider>
          <h1 style={{ marginBottom: 8, color: 'gray' }}>Preview</h1>
          <Story />
          <Playgrond />
        </TrieveInstantsearchProvider>
      );
    },
  ],
  tags: ['autodocs'],
};

export default preview;
