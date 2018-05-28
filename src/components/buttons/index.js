import React from 'react';
import { Spinner } from '../globals';

type ButtonProps = {
  loading?: boolean,
  disabled?: boolean,
  large?: boolean,
  color?: string,
  gradientTheme?: string,
  icon?: string,
  children?: any,
  dataCy?: string,
};

export const Button = (props: ButtonProps) => (
  <StyledSolidButton disabled={props.loading} data-cy={props.dataCy} {...props}>
    {props.icon ? (
      props.loading ? (
        <SpinnerContainer>
          <Spinner color="text.reverse" size="16" />
        </SpinnerContainer>
      ) : (
        <Icon glyph={props.icon} />
      )
    ) : (
      ''
    )}
    {props.loading && !props.icon && <Spinner color="text.reverse" size="16" />}
    <Label loading={props.loading} hasIcon={props.icon}>
      {props.children}
    </Label>
  </StyledSolidButton>
);
