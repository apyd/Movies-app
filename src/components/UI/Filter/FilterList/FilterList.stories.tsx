import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilterList } from './FilterList';
import { FILTER_OPTIONS } from '../../../../dictionary/dictionary';

export default {
  title: 'components/UI/FilterList',
  component: FilterList,
  argTypes: {
    selected: {
      options: ['', 'documentary', 'comedy', 'horror', 'crime'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof FilterList>;

const Template: ComponentStory<typeof FilterList> = (args) => <FilterList {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: FILTER_OPTIONS,
  selected: FILTER_OPTIONS[0].value,
  onFilterSelect: () => {}
};
