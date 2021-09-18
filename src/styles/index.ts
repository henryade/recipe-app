import styled, { css } from 'styled-components';
import {IStyles} from './IStyles';

export const Container = styled.div`
    display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`;

export const Jumbotron = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 80%;
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px solid magenta;
`;

export const Wrapper = styled.div<Partial<IStyles>>`
    display: ${({ display }) => display || 'flex'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
    background: ${({ backgroundColor }) => backgroundColor || 'transparent'};
    min-height: ${({ minHeight }) => minHeight || 'initial'};

    ${({ height }) => height && css`
        height: ${height};`
    }
    ${({ overflowY }) => overflowY && css`
        overflow-y: ${overflowY};`
    }
    ${({ transform }) => transform && css`
        transform: ${transform};`
    }
    ${({ transition }) => transition && css`
        transition: ${transition};`
    }
    ${({ overflow }) => overflow && css`
        overflow: ${overflow};`
    }
    ${({ cursor }) => cursor && css`
        cursor: ${cursor};`
    }
    ${({ flexWrap }) => flexWrap && css`
        flex-wrap: ${flexWrap};`
    }
    ${({ border }) => border && css`
        border: ${border};`
    }
    ${({ borderLeft }) => borderLeft && css`
        border-left: ${borderLeft};`
    }
    ${({ maxHeight }) => maxHeight && css`
        max-height: ${maxHeight};`
    }
    ${({ width }) => width && css`
        width: ${width};`
    }
    ${({ maxWidth }) => maxWidth && css`
        max-width: ${maxWidth};`
    }
    ${({ minWidth }) => minWidth && css`
        min-width: ${minWidth};`
    }
    ${({ bottom }) => bottom && css`
        bottom: ${bottom};`
    }
    ${({ top }) => top && css`
        top: ${top};`
    }
    ${({ left }) => left && css`
        left: ${left};`
    }
    ${({ right }) => right && css`
        right: ${right};`
    }
    ${({ position }) => position && css`
        position: ${position};`
    }
    ${({ padding }) => padding && css`
        padding: ${padding};`
    }
    ${({ margin }) => margin && css`
        margin: ${margin};`
    }
    ${({ marginY }) => marginY && css`
        margin-top: ${marginY};
        margin-bottom: ${marginY};`
    }
    ${({ marginX }) => marginX && css`
        margin-left: ${marginX};
        margin-right: ${marginX};`
    }
    ${({ marginTop }) => marginTop && css`
        margin-top: ${marginTop};`
    }
    ${({ marginBottom }) => marginBottom && css`
        margin-bottom: ${marginBottom};`
    }
    ${({ marginLeft }) => marginLeft && css`
        margin-left: ${marginLeft};`
    }
    ${({ marginRight }) => marginRight && css`
        margin-right: ${marginRight};`
    }
    ${({ paddingY }) => paddingY && css`
        padding-top: ${paddingY};
        padding-bottom: ${paddingY};`
    }
    ${({ paddingTop }) => paddingTop && css`
        padding-top: ${paddingTop};`
    }
    ${({ paddingBottom }) => paddingBottom && css`
        padding-bottom: ${paddingBottom};`
    }
    ${({ paddingLeft }) => paddingLeft && css`
        padding-left: ${paddingLeft};`
    }
    ${({ paddingRight }) => paddingRight && css`
        padding-right: ${paddingRight};`
    }
    ${({ paddingX }) => paddingX && css`
        padding-left: ${paddingX};
        padding-right: ${paddingX};`
    }
    ${({ justifyContent }) => justifyContent && css`
        justify-content: ${justifyContent};`
    }
    ${({ alignItems }) => alignItems && css`
        align-items: ${alignItems};`
    }
    ${({ borderRight }) => borderRight && css`
        border-right: ${borderRight};`
    }
    ${({ borderBottom }) => borderBottom && css`
        border-bottom: ${borderBottom};`
    }
    ${({ borderRadius }) => borderRadius && css`
        border-radius: ${borderRadius};`
    }
    ${({ boxShadow }) => boxShadow && css`
        box-shadow: ${boxShadow};`
    }
    ${({ image }) => image && css`
        content:url(${image});`
    }

    &.list:hover{
      background-color: #e0fbfc;
    }

    &.halfwidth {
      width: 50% !important;
      transition: all 1s ease;
    }
    &.fullwidth {
      width: 100% !important;
      /* transition: all 0.75s ease; */
    }

    &.show {
      width: 50% !important;
        /* transition: opacity 0.35s linear; */
      transition: width 0.75s ease;
      /* transition: opacity 0.35s linear;
      transition: width 0.15s ease-out; */
    }
    &.show > div {
      opacity: 1;
      transition: all 2s ease;
    }
    &.hide {
      width: 0 !important;
      opacity: 0;
      transform: translate(425px);
      /* transition: opacity 5s linear;
      transition: width 0.15s linear; */
    }
    &.hide > div {
      opacity: 0;
      /* transition: opacity 2s ease; */
    }
    @media only screen and (max-width: 565px) {
      &.halfwidth {
      width: 100% !important;
      transition: none;
    }
      &.show {
        z-index: 1000;
        background-color: #fff;
        position: absolute;
        width: 100% !important;
        opacity: 1;
        transform: translate(0px);
        /* transition: opacity 0.35s linear; */
        transition: transform 0.75s ease;
      }
    }

`;

export const Header = styled.div<Partial<IStyles>>`
    display: ${({ display }) => display || 'flex'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    background: ${({ backgroundColor }) => backgroundColor || '#3d5a80'};
    justify-content: ${({ justifyContent }) => justifyContent || 'space-between'};
    min-height: ${({ minHeight }) => minHeight || '50px'};
    align-items: ${({ alignItems }) => alignItems || 'center'};
    position: ${({ position }) => position || 'sticky'};
    top: ${({ top }) => top || 0};

    ${({ padding }) => padding && css`
        padding: ${padding};`
    }
    ${({ paddingX }) => paddingX && css`
        padding-left: ${paddingX};
        padding-right: ${paddingX};`
    }
`;

export const Heading1 = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  word-break: break-word;
  text-transform: uppercase;
  color: #e0fbfc;
`;

export const Heading2 = styled.div<Partial<IStyles>>`
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  word-break: break-word;
  text-transform: uppercase;
  color: ${({ color }) => color || '#293241'};
`;

export const Paragraph = styled.p<Partial<IStyles>>`
  text-align: ${({ textAlign }) => textAlign || 'left'};
  font-size: ${({ fontSize }) => fontSize || '0.875rem'};
  font-weight: ${({ fontWeight }) => fontWeight || 400};
  font-weight: 400;
  word-break: break-word;
  margin: 0;
  color: #293241;

`;

export const Button = styled.button`
  font-size: 1rem;
  font-weight: 500;
  width: 100%;
  word-break: break-word;
  height: 30px;
  background-color: #ee6c4d;
  outline: none;
  border-radius: 2.5px;
  border: none;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #e0fbfc;
  cursor: pointer;

  &:hover {
    color: #e0fbfc;
    background-color: #293241;
  }
`;
export const ImageButton = styled.button<Partial<IStyles>>`
  background-color: transparent;
  outline: none;
  border-radius: 0;
  border: none;
  padding-left: 0.125rem;
  padding-right: 0.125rem;
  cursor: pointer;

  ${({ marginLeft }) => marginLeft && css`
      margin-left: ${marginLeft};`
  }
  ${({ marginRight }) => marginRight && css`
      margin-right: ${marginRight};`
  }

  & svg>path {
    fill: ${({ color }) => color || '#ee6c4d'};
  }

  & svg:hover>path {
    fill: ${({ hoverColor }) => hoverColor || '#98c1d9'};
  }
`;

export const Span = styled.span<Partial<IStyles>>`
  font-size: ${({ fontSize }) => fontSize || '0.5rem'};
  font-weight: 500;
  color: #D8000C;
  display: flex;
  align-self: center;
`;

export const Label = styled.label<Partial<IStyles>>`
  font-size: ${({ fontSize }) => fontSize || '0.875rem'};
  font-weight: 500;
  word-break: break-word;
  margin-bottom: 3px;
  color: #293241;
`;

export const Input = styled.input`
  height: 30px;
  font-size: 0.875rem;
  border: 1px solid #98c1d9;
  padding-left: 10px;
  padding-right: 10px;
  outline: #98c1d9;
  border-radius: 2.5px;
  color: #293241;
  font-family: 'Raleway', sans-serif !important;
  ${({ width }) => width && css`
    width: ${width};`
  }
  &:hover {
    border: 1px solid #3d5a80;
    outline: #3d5a80;
  }
`;

export const Textarea = styled.textarea`
  height: 60px;
  font-size: 0.875rem;
  border: 1px solid #98c1d9;
  outline: #98c1d9;
  color: #293241;
  padding-left: 10px;
  padding-right: 10px;
  resize: none;
  font-family: 'Raleway', sans-serif !important;
  &:hover {
    border: 1px solid #3d5a80;
    outline: #3d5a80;
  }
`;
export const ListItem = styled.li`
  list-style: none;
  width: auto;
  /* border: 1px solid #98c1d9; */
  box-shadow: 0px 0px 3px #98c1d9;
  margin-bottom: 5px;
  padding: 5px 10px;
  word-break: break-word;
`;

export const List = styled.ul`
  padding-left: 0;
`;
export const Select = styled.select`
  height: 30px;
  font-size: 0.875rem;
  border: 1px solid #98c1d9;
  outline: #98c1d9;
  border-radius: 2.5px;
  color: #293241;
  font-family: 'Raleway', sans-serif !important;
  &:hover {
    border: 1px solid #3d5a80;
    outline: #3d5a80;
  }
`;



