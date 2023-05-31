import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

type LoaderProps = {
  height: string;
  width: string;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default function Loader({ height, width }: LoaderProps) {
  return (
    <Container>
      <ThreeDots
        height={height}
        width={width}
        radius="9"
        color="#00000090"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        visible
      />
    </Container>
  );
}
