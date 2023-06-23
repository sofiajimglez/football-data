import React from 'react';
import { render, screen } from '@testing-library/react';
import CompetitionItem from './CompetitionItem';
import { BrowserRouter } from 'react-router-dom';

describe('Competition Item', () => {
  
  const competition = {
    emblem: 'path/to/emblem.png',
    name: 'Competition Name',
    area: {
      flag: 'path/to/flag.png',
      name: 'Area Name'
    },
    code: 'competition-code'
  };

  it('renders competition info in the card', () => {
    render(<BrowserRouter><CompetitionItem competition={competition} /></BrowserRouter>);
    
    // Check if competition name is rendered
    const competitionName = screen.getByText('Competition Name');
    expect(competitionName).toBeInTheDocument();

    // Check if area name is rendered
    const areaName = screen.getByText('Area Name');
    expect(areaName).toBeInTheDocument();

    // Check if more info dropdown button is rendered
    const dropdownButton = screen.getByRole('button', { name: 'more info' });
    expect(dropdownButton).toBeInTheDocument();

    // Check if dropdown items are rendered
    const seasonsLink = screen.getByRole('link', { name: 'Seasons' });
    expect(seasonsLink).toBeInTheDocument();

    const standingsLink = screen.getByRole('link', { name: 'Standings' });
    expect(standingsLink).toBeInTheDocument();

    const matchesLink = screen.getByRole('link', { name: 'Matches' });
    expect(matchesLink).toBeInTheDocument();
  });
});
