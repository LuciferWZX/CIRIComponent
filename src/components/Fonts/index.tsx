import React, {FC} from "react";
import './index.less'
import { StyledH } from "./style";
// export enum FontSize{
//     FS42='42',
//     FS32='32',
//     FS28='28',
//     FS24='24',
//     FS20M='20M',
//     FS20R='20R',
//     FS18M='18M',
//     FS18R='18R',
//     FS16M='16M',
//     FS16R='16R',
//     FS14M='14M',
//     FS14R='14R',
//     FS13M='13M',
//     FS13R='13R',
//     FS12M='12M',
//     FS12R='12R',
//     FS10R='10R',
// }
export type FontSizeType = '10R'|'12R'|'12M'|'13R'|'13M'|'14R'|'14M'|'16R'|'16M'|'18R'|'18M'|'20R'|'20M'|'24'|'28'|'32'|'42'
export interface FontProps{
    /**
     * 各个尺寸的font
     */
    size?:FontSizeType
    /**
     * font内容
     */
    label?:React.ReactNode
}
/**
 * 基础Font组件
 */
export const Font :FC<FontProps>=({
    size='18M',
    label,
    ...props
                           })=>{
    return(
        <StyledH size={size} {...props}>
            {label}
        </StyledH>
    )
}