import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from 'react-instantsearch';
import 'instantsearch.css/themes/algolia.css';
import { ClipLoader } from 'react-spinners';

const meta = {
  title: 'Basics/SearchBox',
  component: SearchBox,
  args: {},
} satisfies Meta<typeof SearchBox>;

export default meta;

type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
  args: {},
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: 'Search for products',
  },
};

export const WithAutoFocus: Story = {
  args: {
    autoFocus: true,
  },
};

export const doNotDisplayLoadingIndicator: Story = {
  args: {
    loadingIconComponent: () => <></>,
  },
};

export const loadingCustomIndicatorWithATemplate: Story = {
  args: {
    loadingIconComponent: ({ classNames }) => (
      <div className={classNames.loadingIcon}>
        <ClipLoader size={20} />
      </div>
    ),
  },
};

export const withCustomTemplates: Story = {
  args: {
    submitIconComponent: ({ classNames }) => (
      <div className={classNames.submitIcon}>🔍</div>
    ),
  },
};

export const searchOnEnter: Story = {
  args: {
    searchAsYouType: false,
  },
};

export const withDebouncedQueryHook: Story = {
  args: {
    queryHook: (query, search) => {
      setTimeout(() => {
        search(query);
      }, 200);
    },
  },
};
