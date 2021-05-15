import React, {FC} from "react";
import {StyledButton } from "./style";
import Icon from "@ant-design/icons";
import {LoadingSvg} from "../Icons";
export interface ButtonProps{
    /**
     * button的类型
     */
    type?:'primary'|'default',
    /**
     * 是否禁用
     */
    disabled?:boolean
    /**
     * 是否loading
     */
    loading?:boolean
    /**
     * button的尺寸
     */
    size?:'small'|'middle'|'large'
    /**
     * 点击事件
     * @param event
     */
    onClick?(event:React.MouseEvent<HTMLDivElement,MouseEvent>):void
    /**
     * 按钮前面的icon
     */
    leftIcon?:React.ReactNode
    /**
     * 自定义loading图标
     */
    loadingIcon?:React.ReactNode
    /**
     * 按钮后面的icon
     */
    rightIcon?:React.ReactNode
}
/**
 * 基础的Button组件
 * @constructor
 */
export const Button:FC<ButtonProps>=({loadingIcon,leftIcon,rightIcon,onClick,size='middle',loading,disabled,type='default',children,...props})=>{
    return(
        <StyledButton onClick={loading?undefined:onClick} size={size} tabIndex={0} type={type} disabled={disabled} {...props}>
           <span>
               {leftIcon?<span style={{marginRight:10}}>{leftIcon}</span>:(loading && (loadingIcon??<Icon className={'ciri-btn-loading-icon'} component={LoadingSvg} />))}
                {children}
               {rightIcon &&<span style={{marginLeft:10}}>{rightIcon}</span>}
           </span>
        </StyledButton>
    )
}