import React from 'react';
import { render, screen } from '@testing-library/react';
import { FooterCTA } from '../FooterCTA';

describe('FooterCTA', () => {
  it('renders the "Ready to start a project?" heading', () => {
    render(<FooterCTA />);
    const heading = screen.getByRole('heading', { level: 3, name: /ready to start a project\?/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the "Contact us" link pointing to /contact', () => {
    render(<FooterCTA />);
    const link = screen.getByRole('link', { name: /contact us/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/contact');
  });
});
