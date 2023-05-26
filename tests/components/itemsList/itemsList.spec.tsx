import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemsList from '../../../src/componets/itemsList/ItemsList';
import * as itemsFactory from './itemsFactory';


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
});