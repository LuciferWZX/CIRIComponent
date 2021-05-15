import React from 'react';
import {Meta, Story} from '@storybook/react';

import {Font} from '../components'
import {FontProps} from '../components/Fonts';

export default {
    title: 'Example/Font',
    component: Font,
    argTypes: {
        //backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<FontProps> = (args) => <Font {...args} />;

export const FS42 = Template.bind({});
FS42.args = {
    size:'42',
    label:"普通文本 size 42"
};
export const FS42WithReactNode = Template.bind({});
FS42WithReactNode.args = {
    size:'42',
    label:<div style={{color:'orange'}}>带标签的 size 42</div>
};
