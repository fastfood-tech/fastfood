import React from 'react';
import { render, screen } from '@testing-library/react';
import ItemsList from '../../../src/componets/itemsList/ItemsList';
import { createItems } from './itemsFactory';


describe('<ItemsList />', () => {
  it('should render all items', () => {
    const items = createItems();
    render(<ItemsList items={items}/>);

    const renderedComponents = screen.queryAllByTestId(/child-component-\d+/);
    expect(renderedComponents).toHaveLength((items.length));
  }); 
});