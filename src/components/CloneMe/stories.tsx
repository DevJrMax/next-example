import { Meta, StoryFn } from '@storybook/react';
import { CloneMe, CloneMeProps } from '.';

export default {
  title: 'Heading',
  component: CloneMe,
} as Meta;

export const Template: StoryFn<CloneMeProps> = (args) => {
  return (
    <div>
      <CloneMe {...args} />
    </div>
  );
};
