import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

export default {
  title: 'CubeComponentLibary/Text',
  component: Text,
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const BaseText: Story = {
    render: (args) => {
        return <Text {...args}>Iam Base Text</Text>
    }
};