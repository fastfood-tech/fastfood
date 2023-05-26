import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemsList from '../../../src/componets/itemsList/ItemsList';
import * as itemsFactory from './itemsFactory';
import { Direction, WrapMode } from '../../../src/componets/itemsList/types';


describe('<ItemsList />', () => {
  it('should render all items', () => {
    const items = itemsFactory.createItems();
    render(<ItemsList items={items}/>);

    const renderedComponents = screen.queryAllByTestId(/child-component-\d+/);
    expect(renderedComponents).toHaveLength((items.length));
  }); 

  it('should render the title when provided', () => {
    const title = 'A beautiful title';
    const items = itemsFactory.createItems();
    render(<ItemsList title={title} items={items} />);

    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('should render the subtitle when provided', () => {
    const subTitle = 'A beautiful subtitle';
    const items = itemsFactory.createItems();
    render(<ItemsList subTitle={subTitle} items={items} />);

    expect(screen.getByText(subTitle)).toBeInTheDocument();
  });

  it('should apply custom font-size to subTitle', () => {
    const subTitle = 'A beautiful subtitle';
    const fontSize = "4.2rem"

    const items = itemsFactory.createItems();
    render(<ItemsList subTitle={subTitle} subtitleFontSize={fontSize} items={items} />);

    expect(screen.getByText(subTitle)).toHaveStyle(`font-size: ${fontSize}`);
  });

  it('should apply custom font-size to Title', () => {
    const title = 'A beautiful title';
    const fontSize = "7.3rem"

    const items = itemsFactory.createItems();
    render(<ItemsList title={title} titleFontSize={fontSize} items={items} />);

    expect(screen.getByText(title)).toHaveStyle(`font-size: ${fontSize}`);
  });
});