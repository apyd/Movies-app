import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePicker } from './DatePicker';

export default {
  title: 'components/UI/DatePicker',
  component: DatePicker,
  argTypes: {
    value: {
      control: { type: 'date' }
    },
    label: {
      control: { type: 'text' }
    },
    placeholder: {
      control: { type: 'text' }
    },
    error: {
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'DatePicker',
  touched: false,
  value: '',
  label: 'DatePicker',
  onBlur: () => {},
  onChange: () => {}
};
