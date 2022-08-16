import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Filter } from './Filter';

export default {
  title: 'components/UI/Filter',
  component: Filter,
  argTypes: {
    value: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Filter',
  onFilterSelect: () => {},
  value: 'all',
  label: 'All',
  selected: ''
};
