import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SvgIcon } from './SvgIcon';
import SearchIcon from '../../../assets/search.svg';

export default {
  title: 'components/UI/SvgIcon',
  component: SvgIcon,
  argTypes: {
    isSmall: {
      control: { type: 'boolean' }
    }
  }
} as ComponentMeta<typeof SvgIcon>;

const Template: ComponentStory<typeof SvgIcon> = (args) => <SvgIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  isSmall: false,
  // @ts-ignore
  svg: SearchIcon
};
