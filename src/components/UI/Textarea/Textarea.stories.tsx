import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from './Textarea';

export default {
  title: 'components/UI/Textarea',
  component: Textarea,
  argTypes: {
    value: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    }
  }
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'textArea',
  name: 'textArea',
  value: '',
  placeholder: 'Textarea placeholder',
  label: ''
};
