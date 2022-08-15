import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from './Search';

export default {
  title: 'components/UI/Search',
  component: Search,
  argTypes: {
    value: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' }
    },
    searchButtonText: {
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Search placeholder',
  searchButtonText: 'Search',
  onChange: () => {},
  onSearch: () => {}
};
