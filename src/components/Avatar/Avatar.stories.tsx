import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import Avatar from './Avatar';

export default {
  title: 'CubeComponentLibary/Avatar',
  component: Avatar,
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const BaseAvatar: Story = {
    render: (args) => {
        return <Avatar {...args}>Iam Base Avatar</Avatar>
    }
};