import React from 'react';
import styled from 'styled-components';

export interface ISectionContainerProps
  extends React.HtmlHTMLAttributes<HTMLElement> {
  title?: string;
  subTitle?: string;
  titleFontSize?: string;
  subtitleFontSize?: string;
}

const Container = styled.div`
  & > h1 {
    font-weight: 700;
    font-size: 2.25rem;
    color: #181818;
  }

  & > h2 {
    margin-top: 1rem;
  }

  margin-top: 4rem;
`;

export default function SectionContainer({
  title,
  subTitle,
  titleFontSize = '1.75rem',
  subtitleFontSize = '1.25rem',
  children,
  ...props
}: ISectionContainerProps) {
  return (
    <Container {...props}>
      {title && <h1 style={{ fontSize: titleFontSize }}>{title}</h1>}
      {subTitle && <h2 style={{ fontSize: subtitleFontSize }}>{subTitle}</h2>}
      {children}
    </Container>
  );
}
