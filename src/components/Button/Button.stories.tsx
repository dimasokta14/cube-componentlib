import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

export default {
  title: 'CubeComponentLibary/Button',
  component: Button,
//   argTypes: {
//     btn_color: {
//       options: ['primary', 'secondary'],
//       control: { type: 'select' },
//     },
//   },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: (args) => {
        return <Button {...args}>Iam Base Button</Button>
    }
};