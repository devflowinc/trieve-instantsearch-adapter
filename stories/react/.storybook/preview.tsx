import React from 'react';
import type { Preview } from '@storybook/react';
import { SearchBox, Hits } from 'react-instantsearch';

import TrieveInstantsearchProvider from '../src/trieveInstantsearchProvider';

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

          <div
            style={{
              marginTop: 24,
              borderTop: '1px solid #f2f2f2',
              paddingTop: 8,
            }}
          >
            <h1 style={{ marginBottom: 8, color: 'gray' }}>Playground</h1>
            <SearchBox />
            <div style={{ marginTop: 8 }}>
              <Hits />
            </div>
          </div>
        </TrieveInstantsearchProvider>
      );
    },
  ],
  tags: ['autodocs'],
};

export default preview;
