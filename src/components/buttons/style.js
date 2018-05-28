import styled, { css } from 'styled-components';
import { Gradient, Shadow, Transition, hexa } from '../globals';

const baseButton = css`
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 600;
  white-space: nowrap;
  word-break: keep-all;
  transition: ${Transition.hover.off};
  cursor: pointer;
  font-size: ${props => (props.large ? '18px' : '14px')};
  line-height: 1;
  position: relative;
  text-align: center;
  padding: ${props =>
    props.icon
      ? props.large ? '8px 12px' : '4px 8px'
      : props.large ? '16px 32px' : '12px 16px'};
  &:hover {
    transition: ${Transition.hover.on};
    opacity: ${props => (props.disabled ? '0.5' : '1')};
  }
  /* if an icon and label are both present, add space around the label*/
  div + span,
  span + span {
    margin: 0 8px;
  }
`;
