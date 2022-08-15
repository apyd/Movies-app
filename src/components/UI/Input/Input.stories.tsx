import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'components/UI/Input',
  component: Input,
  argTypes: {
    id: {
      control: { type: 'text' }
    },
    name: {
      control: { type: 'text' }
    },
    value: {
      control: { type: 'text' }
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'input',
  name: 'input',
  type: 'text',
  value: '',
  label: 'Input label',
  placeholder: 'Input placeholder',
  touched: false,
  onBlur: () => {},
  onChange: () => {},
  error: ''
};
