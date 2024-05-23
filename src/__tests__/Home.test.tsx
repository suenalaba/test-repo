import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home component', () => {
  it('should render the home component', () => {
    render(<Home />);
    expect(screen.getByText('Hello world by editing')).toBeInTheDocument();
    expect(screen.getByText('src/app/page.tsx')).toBeInTheDocument();

  });
});