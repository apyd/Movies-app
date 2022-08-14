import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Search } from './Search';

export default {
  title: 'components/UI/Search',
  component: Search,
  argTypes: {
    value: {
      control: { type: 'input' }
    },
    placeholder: {
      control: { type: 'input' }
    },
    searchButtonText: {
      control: { type: 'input' }
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
