import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PageLayout from './PageLayout';

describe('PageLayout', () => {
  it('renders navbar', () => {

    render(<BrowserRouter><PageLayout /></BrowserRouter>);

    const navItem = screen.getByText('Home');

    // Check if nav item 'Home' is rendered
    expect(navItem).toBeInTheDocument();
  });

  it('renders footer', () => {

    render(<BrowserRouter><PageLayout /></BrowserRouter>);

    const authorInfo = screen.getByText('2023 ⚽ Sofía Jiménez');

    //Check if footer element is rendered
    expect(authorInfo).toBeInTheDocument();
  });
});