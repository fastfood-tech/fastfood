import React from 'react';
import styled from 'styled-components';
import { FaCheck as CheckIcon } from 'react-icons/fa';

interface SelectedItemCoverProps extends React.HtmlHTMLAttributes<HTMLElement> {
  show: boolean;
}

const Container = styled.div`
  justify-content: center;
  align-items: center;

  background-color: rgba(70, 200, 70, 0.8);

  & > svg {
    color: #fff;
    font-size: 2.5rem;
  }

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export default function SelectedItemCover({
  show,
  style = {},
  ...props
}: SelectedItemCoverProps) {
  return (
    <Container
      style={{ ...style, display: show ? 'flex' : 'block' }}
      {...props}
    >
      <CheckIcon />
    </Container>
  );
}
