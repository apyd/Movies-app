import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Logo } from './Logo';

export default {
  title: 'components/UI/Logo',
  component: Logo,
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'small'
};
