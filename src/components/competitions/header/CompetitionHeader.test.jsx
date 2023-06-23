import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CompetitionHeader from './CompetitionHeader';

describe('Competition Header', () => {
  const competition = {
    "area": {
      "id": 2224,
      "name": "Country 1",
      "code": "ESP",
      "flag": "path/flag/760.svg"
    },
    "id": 2014,
    "name": "Campeonato A",
    "code": "PD",
    "type": "LEAGUE",
    "emblem": "path/emblem/PD.png",
    "currentSeason": {
      "id": 1504,
      "startDate": "2022-08-14",
      "endDate": "2023-06-04",
      "currentMatchday": 38,
      "winner": null
    },
    "seasons": [
      {
        "id": 635,
        "startDate": "2020-09-12",
        "endDate": "2021-05-23",
        "currentMatchday": 38,
        "winner": {
          "id": 78,
          "name": "Team 1",
          "shortName": "Team 1",
          "tla": "ATL",
          "crest": "path/crest/78.svg",
        }
      },
      {
        "id": 519,
        "startDate": "2019-08-16",
        "endDate": "2020-07-19",
        "currentMatchday": 38,
        "winner": {
          "id": 86,
          "name": "Team 2",
          "shortName": "Team 2",
          "tla": "RMA",
          "crest": "path/crest/86.png"
        }
      }]
  };

  it('renders competition info in the card', () => {
    render(<BrowserRouter><CompetitionHeader competition={competition} /></BrowserRouter>);

    // Check if competition name is rendered
    const competitionName = screen.getByText('Campeonato A');
    expect(competitionName).toBeInTheDocument();

    // Check if buttons are rendered
    const seasonsLink = screen.getByRole('link', { name: 'Seasons' });
    expect(seasonsLink).toBeInTheDocument();

    const standingsLink = screen.getByRole('link', { name: 'Standings' });
    expect(standingsLink).toBeInTheDocument();

    const matchesLink = screen.getByRole('link', { name: 'Matches' });
    expect(matchesLink).toBeInTheDocument();
  });

});