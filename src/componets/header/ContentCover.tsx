import React, { HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IcoverProps extends HtmlHTMLAttributes<HTMLElement> {
  hide: boolean;
}

const ContentCover = styled(({ hide, ...props }: IcoverProps) => (
  <div {...props} />
))`
  height: 100vh;
  width: 50vw;

  position: fixed;
  left: ${({ hide }) => (hide ? '-50vw' : 0)};
  top: 0;

  background-color: #fff;
  opacity: 0.9;

  z-index: 5;

  transition: 0.5s;
`;

export default ContentCover;
