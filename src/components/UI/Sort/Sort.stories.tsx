import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sort } from './Sort';
import { SORT_OPTIONS } from '../../../dictionary/dictionary';

export default {
  title: 'components/UI/Sort',
  component: Sort,
  argTypes: {
    options: {
      options: ['average_vote', 'release_date'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof Sort>;

const Template: ComponentStory<typeof Sort> = (args) => <Sort {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: SORT_OPTIONS[0].value,
  onOptionChange: () => {},
  sortLabel: 'Sort by'
};
