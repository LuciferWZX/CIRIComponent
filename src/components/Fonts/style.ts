import styled, {css} from "styled-components";
import {FontSizeType} from "./index";
import {defaultFontFamily} from "../../mixin/fontFamily";
const renderFontStyle =(size?:FontSizeType):any=>{
    switch (size) {
        case "42":{
            return css`
              font-weight: 500;
              font-size: 42pt;
              line-height: 50pt;
            `
        }
        case "32": {
            return css`
              font-weight: 500;
              font-size: 32pt;
              line-height: 44pt;
            `
        }
        case "28": {
            return css`
              font-weight: 500;
              font-size: 28pt;
              line-height: 38pt;
            `
        }
        case "24": {
            return css`
              font-weight: 500;
              font-size: 24pt;
              line-height: 36pt;
            `
        }
        case "20R": {
            return css`
              font-weight: 400;
              font-size: 20pt;
              line-height: 30pt;
            `
        }
        case "20M": {
            return css`
              font-weight: 500;
              font-size: 20pt;
              line-height: 30pt;
            `
        }
        case "18M": {
            return css`
              font-weight: 500;
              font-size: 18pt;
              line-height: 27pt;
            `
        }
        case "18R": {
            return css`
              font-weight: 400;
              font-size: 18pt;
              line-height: 27pt;
            `
        }
        case "16R": {
            return css`
              font-weight: 400;
              font-size: 16pt;
              line-height: 24pt;
            `
        }
        case "16M": {
            return css`
              font-weight: 500;
              font-size: 16pt;
              line-height: 24pt;
            `
        }
        case "14M": {
            return css`
              font-weight: 500;
              font-size: 14pt;
              line-height: 21pt;
            `
        }
        case "14R": {
            return css`
              font-weight: 400;
              font-size: 14pt;
              line-height: 21pt;
            `
        }
        case "13M": {
            return css`
              font-weight: 500;
              font-size: 13pt;
              line-height: 20pt;
            `
        }
        case "13R": {
            return css`
              font-weight: 400;
              font-size: 13pt;
              line-height: 20pt;
            `
        }
        case "12M": {
            return css`
              font-weight: 500;
              font-size: 12pt;
              line-height: 18pt;
            `
        }
        case "12R": {
            return css`
              font-weight: 400;
              font-size: 12pt;
              line-height: 18pt;
            `
        }
        case "10R": {
            return css`
              font-weight: 400;
              font-size: 10pt;
              line-height: 15pt;
            `
        }
    }
}

export const StyledH = styled.div<{size?:FontSizeType}>`
  ${defaultFontFamily()};
  color: ${({theme})=>theme.fontComponentColor};
  ${({size})=>renderFontStyle(size)};
  display: inline-block;
`