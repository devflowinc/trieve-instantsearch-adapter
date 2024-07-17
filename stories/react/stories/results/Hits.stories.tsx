import type { Meta, StoryObj } from '@storybook/react';
import 'instantsearch.css/themes/algolia.css';
import { Hits } from 'react-instantsearch';

const meta = {
  title: 'Results/Hits',
  component: Hits,
  args: {},
} satisfies Meta<typeof Hits>;

export default meta;

type Story = StoryObj<typeof Hits>;

export const Default: Story = {
  args: {},
};

export const withTransformedItems: Story = {
  args: {
    hitComponent: ({ hit }) => hit.metadata.company_name,
  },
};
