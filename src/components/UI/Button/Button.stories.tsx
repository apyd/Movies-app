import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'components/UI/Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost', 'outline'],
      control: { type: 'select' }
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' }
    },
    shape: {
      options: ['rectangle', 'round'],
      control: { type: 'radio' }
    },
    children: {
      control: { type: 'text' }
    },
    isDisabled: {
      control: { type: 'boolean' }
    }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (argTypes) => <Button {...argTypes} />;

export const CustomButton = Template.bind({});
CustomButton.args = {
  variant: 'primary',
  size: 'small',
  shape: 'rectangle',
  children: 'ButtonText',
  isDisabled: false
};
