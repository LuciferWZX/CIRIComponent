import styled, {css} from "styled-components";
const renderButtonType = (type?:'primary'|'default',disabled?:boolean):any=>{
    switch (type) {
        case "primary":{
            if(disabled){
                return css`
                  background-color: #C7C7C7;
                  color: white;
                  cursor: not-allowed;
                `
            }
            return css`
              color: white;
              background-color:#6264A7;
              :focus,:hover{
                background-color: #464775;
              }
            `
        }
        default:{
            if(disabled){
                return css`
                  border: 1px solid #C7C7C7;
                  color: rgba(148, 148, 148, 1);
                  cursor: not-allowed;
                `
            }
            return css`
              border: 1px solid #C7C7C7;
              color: #6264A7;
              :focus,:hover{
                background-color: #F5F5F5;
                color: rgba(73, 75, 131, 1);
              }
            `
        }
    }
}
const renderButtonSize=(size?:'small'|'middle'|'large')=>{
    switch (size) {
        case "large":{
            return css`
              font-size: 14px;
              height: 40px;
              line-height: 40px;
            `
        }
        case "small":{
            return css`
              height: 28px;
              line-height: 28px;
            `
        }
        default:{
            return css`
              height: 32px;
              line-height: 32px;
            `
        }
    }
}
export const StyledButton = styled.div<{type?:'primary'|'default',disabled?:boolean,size?:'small'|'middle'|'large'}>`
  display: inline-block;
  outline:0;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 17px;
  cursor: pointer;
  font-family: PingFang SC,serif;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  transition-duration: 0.2s;
  transition-property: all;
  ${({type,disabled})=>renderButtonType(type,disabled)};
  .ciri-btn-loading-icon{
    margin-right: 10px;
    vertical-align: text-top;
    animation:turn 1s linear infinite;
  }
  ${({size})=>renderButtonSize(size)}
  @keyframes turn{
    0%{-webkit-transform:rotate(0deg);}
    25%{-webkit-transform:rotate(90deg);}
    50%{-webkit-transform:rotate(180deg);}
    75%{-webkit-transform:rotate(270deg);}
    100%{-webkit-transform:rotate(360deg);}
  }
`