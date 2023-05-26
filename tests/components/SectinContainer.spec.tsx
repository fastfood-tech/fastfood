import React from 'react';
import { render, screen } from '@testing-library/react';
import SectionContainer from '../../src/componets/SectionContainer';
import * as componentsFactory from './factories/componentsFactory';

describe('<SectionContainer />', () => {
  it('should render all child components', () => {
    const mockChildren = componentsFactory.createComponents();
    render(<SectionContainer>{mockChildren}</SectionContainer>);

    const renderedComponents = screen.queryAllByTestId(/child-component-\d+/);
    expect(renderedComponents).toHaveLength(mockChildren.length);
  });

  it('should render the title when provided', () => {
    const title = 'A beautiful title';
    render(<SectionContainer title={title} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should render the subtitle when provided', () => {
    const subTitle = 'A beautiful subtitle';
    render(<SectionContainer subTitle={subTitle} />);

    expect(screen.getByText(subTitle)).toBeInTheDocument();
  });

  it('should apply custom font-size to subTitle', () => {
    const subTitle = 'A beautiful subtitle';
    const fontSize = '4.2rem';

    render(
      <SectionContainer subTitle={subTitle} subtitleFontSize={fontSize} />,
    );

    expect(screen.getByText(subTitle)).toHaveStyle(`font-size: ${fontSize}`);
  });

  it('should apply custom font-size to Title', () => {
    const title = 'A beautiful title';
    const fontSize = '7.3rem';

    render(<SectionContainer title={title} titleFontSize={fontSize} />);

    expect(screen.getByText(title)).toHaveStyle(`font-size: ${fontSize}`);
  });
});
