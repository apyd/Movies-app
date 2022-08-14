import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'components/UI/Input',
  component: Input,
  argTypes: {
    id: {
      control: { type: 'input' }
    },
    name: {
      control: { type: 'input' }
    },
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
