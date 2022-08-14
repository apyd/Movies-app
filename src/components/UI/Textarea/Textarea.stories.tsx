import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from './Textarea';

export default {
  title: 'components/UI/Textarea',
  component: Textarea,
  argTypes: {
    value: {
      control: { type: 'input' }
    },
    label: {
      control: { type: 'input' }
    },
    error: {
      control: { type: 'input' }
    }
  }
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'textArea',
  name: 'textArea',
  value: '',
  touched: false,
  onBlur: () => {},
  onChange: () => {},
  placeholder: 'Textarea placeholder',
  label: '',
  error: ''
};
