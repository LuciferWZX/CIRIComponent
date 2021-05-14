import React from 'react';
import { storiesOf } from '@storybook/react';
import {Button} from "../components/index";
storiesOf('Button',module).add('按钮',()=>{
    return(
        <Button />
    )
})