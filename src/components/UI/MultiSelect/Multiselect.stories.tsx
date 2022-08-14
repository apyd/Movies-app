import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MultiSelect } from './MultiSelect';
import { GENRES } from '../../../dictionary/dictionary';

export default {
  title: 'components/UI/MultiSelect',
  component: MultiSelect,
  argTypes: {
    isExpanded: {
      control: { type: 'boolean' }
    },
    label: {
      control: { type: 'input' }
    },
    error: {
      control: { type: 'input' }
    }
  }
} as ComponentMeta<typeof MultiSelect>;

const Template: ComponentStory<typeof MultiSelect> = () => <MultiSelect />;

export const Default = Template.bind({});
Default.args = {
  options: GENRES,
  isExpanded: false,
  value: [],
  touched: false,
  onChange: () => {},
  onBlur: () => {},
  toggleSelect: () => {},
  label: 'Multiselect label',
  error: ''
};
