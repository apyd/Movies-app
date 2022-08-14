import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Filter } from './Filter';

export default {
  title: 'components/UI/Filter',
  component: Filter,
  argTypes: {
    value: {
      control: { type: 'input' }
    },
    label: {
      control: { type: 'input' }
    }
  }
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Filter',
  onFilterSelect: () => {},
  value: '',
  label: '',
  selected: ''
};
