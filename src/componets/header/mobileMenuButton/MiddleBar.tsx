import React from 'react';
import { styled } from 'styled-components';

interface IMiddleBarProps extends React.HtmlHTMLAttributes<HTMLElement> {
  hide: boolean;
}

const Container = styled(({ hide, ...props }: IMiddleBarProps) => (
  <div {...props} />
))`
  display: flex;
  justify-content: space-between;

  width: 2rem;
  height: 0.3rem;

  margin: 4px auto;
  transition: 0.3s;

  opacity: ${({ hide }) => (hide ? '0' : '1')};

  div {
    background: #ffffff;
  }

  div:first-child {
    width: 0.25rem;
    border-radius: 50%;
  }

  div:last-child {
    width: 1.25rem;
    border-radius: 50px;
  }
`;

function MiddleBar({ hide }: IMiddleBarProps) {
  return (
    <Container hide={hide}>
      <div />
      <div />
    </Container>
  );
}

export default MiddleBar;
