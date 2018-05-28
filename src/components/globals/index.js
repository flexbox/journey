/* eslint no-eval: 0 */
import styled, { css, keyframes } from 'styled-components';

export const Truncate = width => css`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  min-width: 0;
`;

export const hexa = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export const Shadow = {
  low: '0 2px 8px',
  mid: '0 4px 12px',
  high: '0 8px 16px',
};

export const Transition = {
  hover: {
    on: 'all 0.2s ease-in',
    off: 'all 0.2s ease-out',
  },
  reaction: {
    on: 'all 0.15s ease-in',
    off: 'all 0.1s ease-out',
  },
  dropdown: {
    off: 'all 0.35s ease-out',
  },
};

export const zIndex = new function() {
  // Write down a camel-cased element descriptor as the name (e.g. modal or chatInput).
  // Define at a component level here, then use math to handle order at a local level.
  // (e.g. const ModalInput = styled.input`z-index: zIndex.modal + 1`;)
  // This uses constructor syntax because that allows self-referential math

  this.base = 1; // z-index: auto content will go here or inherit z-index from a parent

  this.background = this.base - 1; // content that should always be behind other things (e.g. textures/illos)
  this.hidden = this.base - 2; // this content should be hidden completely (USE ADD'L MEANS OF HIDING)

  this.card = this.base + 1; // all cards should default to one layer above the base content
  this.loading = this.card + 1; // loading elements should never appear behind cards
  this.form = this.card + 1; // form elements should never appear behind cards
  this.search = this.form; // search is a type of form and should appear at the same level

  this.composerToolbar = 2000; // composer toolbar - should sit in between most elements

  this.chrome = 3000; // chrome should be visible in modal contexts
  this.dropDown = this.chrome + 1; // dropDowns shouldn't appear behind the navBar
}();

export const fontStack = css`
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica', 'Segoe',
    sans-serif;
`;

export const monoStack = css`
  font-family: 'Input Mono', 'Menlo', 'Inconsolata', 'Roboto Mono', monospace;
`;

const spin = keyframes`
  to {transform: rotate(360deg);}
`;

export const Spinner = styled.span`
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};

  &:before {
    content: '';
    box-sizing: border-box;
    display: inline-block;
    position: ${props => (props.inline ? 'relative' : 'absolute')};
    top: ${props => (props.inline ? '0' : '50%')};
    left: ${props => (props.inline ? '0' : '50%')};
    width: ${props => (props.size !== undefined ? `${props.size}px` : '16px')};
    height: ${props => (props.size !== undefined ? `${props.size}px` : '16px')};
    margin-top: ${props =>
      props.size !== undefined ? `-${props.size / 2}px` : '-8px'};
    margin-left: ${props =>
      props.size !== undefined ? `-${props.size / 2}px` : '-8px'};
    border-radius: 50%;
    border: ${props => '2px'} solid
      ${props =>
        props.color
          ? eval(`props.theme.${props.color}`)
          : props.theme.brand.alt};
    border-top-color: transparent;
    border-right-color: ${props =>
      props.color ? eval(`props.theme.${props.color}`) : props.theme.brand.alt};
    border-bottom-color: transparent;
    animation: ${spin} 2s linear infinite;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.5rem;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.text.default};

  &:not(:first-of-type) {
    margin-top: 1.5rem;
  }

  a {
    text-decoration: underline;
  }
`;

export const PrefixLabel = styled.label`
  display: flex;
  width: 100%;
  margin-top: 0.25rem;
  padding-left: 0.875rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.placeholder};

  > input {
    margin-left: 2px;
  }
`;

export const Input = styled.input`
  flex: 1 0 auto;
  background: ${({ theme }) => theme.bg.default};
  font-weight: 500;
  width: 100%;
  font-size: 0.875rem;
  border: 0.125rem solid ${({ theme }) => theme.bg.inactive};
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  margin-top: 0.125rem;
  box-shadow: none;

  ${props =>
    props.type === 'checkbox' &&
    css`
      flex: initial;
      width: initial;
      margin-right: 0.5rem;
    `} &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
  &:-moz-placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.brand.default};
  }
`;

export const TextArea = styled.textarea`
  flex: 1 0 auto;
  width: 100%;
  background: ${({ theme }) => theme.bg.default};
  font-weight: 500;
  font-size: 0.875rem;
  border: 0.125rem solid ${({ theme }) => theme.bg.inactive};
  border-radius: 0.25rem;
  padding: 0.75rem;
  margin-top: 0.125rem;
  box-shadow: none;

  &::placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
  &:-moz-placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.text.placeholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.brand.default};
  }
`;

export const H1 = styled.h1`
  ${fontStack};
  color: ${({ theme }) => theme.text.default};
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const H2 = styled.h2`
  color: ${({ theme }) => theme.text.default};
  ${fontStack};
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.25;
  margin: 0;
  padding: 0;
`;

export const H3 = styled.h3`
  color: ${({ theme }) => theme.text.default};
  ${fontStack};
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

export const H4 = styled.h4`
  color: ${({ theme }) => theme.text.default};
  ${fontStack};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const H5 = styled.h5`
  color: ${({ theme }) => theme.text.default};
  ${fontStack};
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const H6 = styled.h6`
  color: ${({ theme }) => theme.text.default};
  ${fontStack};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.675rem;
  line-height: 1.5;
  margin: 0;
  padding: 0;
`;

export const P = styled.p`
  color: ${({ theme }) => theme.text.default};
  ${fontStack};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.text.default};
  ${fontStack};
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.4;
  margin: 0;
  padding: 0;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const HorizontalRule = styled(FlexRow)`
  position: relative;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  color: ${props => props.theme.bg.border};

  hr {
    display: inline-block;
    flex: 1 0 auto;
    border-top: 1px solid ${props => props.theme.bg.border};
  }

  div {
    margin: 0 16px;
  }
`;
