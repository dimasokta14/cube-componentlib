import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Title from './Title';

export default {
  title: 'CubeComponentLibary/Title',
  component: Title,
} as Meta<typeof Title>;

type Story = StoryObj<typeof Title>;

export const BaseTitle: Story = {
    render: (args) => {
        return <Title {...args}>Iam Base Title</Title>
    }
};