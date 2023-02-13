import type { Meta, StoryObj } from '@storybook/react';

import { GenericBox } from './Box';

const meta: Meta<typeof GenericBox> = {
  title: 'Box/GenericBox',
  component: GenericBox,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'inline-radio' },
  },
};

export default meta;
type Story = StoryObj<typeof GenericBox>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Basic Button',
  },
};
