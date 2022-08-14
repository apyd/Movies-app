import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DatePicker } from './DatePicker';

export default {
  title: 'components/UI/DatePicker',
  component: DatePicker,
  argTypes: {
    value: {
      control: { type: 'input' }
    },
    label: {
      control: { type: 'input' }
    },
    placeholder: {
      control: { type: 'input' }
    },
    error: {
      control: { type: 'input' }
    }
  }
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => <DatePicker {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'DatePicker',
  touched: true,
  onBlur: () => {},
  onChange: () => {}
};
