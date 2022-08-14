import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';

export default {
  title: 'components/UI/LoadingSpinner',
  component: LoadingSpinner
} as ComponentMeta<typeof LoadingSpinner>;

const Template: ComponentStory<typeof LoadingSpinner> = () => <LoadingSpinner />;

export const Default = Template.bind({});
