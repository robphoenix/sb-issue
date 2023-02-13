import type { Meta, StoryObj } from '@storybook/react';

import { BasicBox } from './Box';

const meta: Meta<typeof BasicBox> = {
  title: 'Box/BasicBox',
  component: BasicBox,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio' },
  },
};

export default meta;
type Story = StoryObj<typeof BasicBox>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Basic Button',
  },
};
