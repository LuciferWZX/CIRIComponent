import {configure} from "@storybook/react";
const req = require.context('../src/stories',true,/\.stories\.tsx$/)
function loadStories():void {
    req.keys().forEach((filename:string)=>req(filename))
}
configure(loadStories, module);