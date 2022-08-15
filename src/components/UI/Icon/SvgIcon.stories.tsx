import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SvgIcon } from './SvgIcon';
import { iconTypes } from './SvgIcon.consts';

export default {
  title: 'components/UI/SvgIcon',
  component: SvgIcon,
  argTypes: {
    isSmall: {
      control: { type: 'boolean' }
    },
    icon: {
      options: ['search', 'calendar', 'chevron', 'error', 'success', 'threedots'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof SvgIcon>;

const Template: ComponentStory<typeof SvgIcon> = (args) => <SvgIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  isSmall: false,
  icon: iconTypes.search
};
