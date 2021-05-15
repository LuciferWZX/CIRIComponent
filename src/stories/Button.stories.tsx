import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from '../components';
import {ButtonProps} from "../components/Buttons";

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}>按钮</Button>;

export const Default = Template.bind({});
Default.args = {
  type:'default',
};
export const LeftIcon = Template.bind({});
LeftIcon.args = {
  type:'default',
  leftIcon:<span>icon</span>
};
export const RightIcon = Template.bind({});
RightIcon.args = {
  type:'default',
  rightIcon:<span>icon</span>
};
export const CustomLoadingIcon = Template.bind({});
CustomLoadingIcon.args = {
  type:'default',
  loading:true,
  loadingIcon:<span>icon</span>
};
//
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
