import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SeasonItem from './SeasonItem';

describe('Season item', () => {

  const season = {
    "id": 635,
    "startDate": "2020-09-12",
    "endDate": "2021-05-23",
    "currentMatchday": 38,
    "winner": {
      "id": 78,
      "name": "Team 1",
      "shortName": "Team",
      "tla": "ATL",
      "crest": "path/crest/78.svg"

    }
  };

  it('renders season info in the row', () => {
    render(<BrowserRouter><SeasonItem season={season} /></BrowserRouter>);

    // Check if season winner is rendered
    const winnerName = screen.getByText('Team 1');
    expect(winnerName).toBeInTheDocument();

    // Check if season start and end years are rendered
    const seasonYears = screen.getByText('2020 / 2021');
    expect(seasonYears).toBeInTheDocument();

  });

});