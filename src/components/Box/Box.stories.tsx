import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

export default {
  title: 'CubeComponentLibary/Box',
  component: Box,
} as Meta<typeof Box>;

type Story = StoryObj<typeof Box>;

export const BaseBox: Story = {
    render: (args) => {
        return <Box {...args}>Iam Base Box</Box>
    }
};