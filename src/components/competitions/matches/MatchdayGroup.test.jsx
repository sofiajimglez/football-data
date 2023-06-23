import React from 'react';
import { render, screen } from '@testing-library/react';
import MatchdayGroup from './MatchdayGroup';
import { BrowserRouter } from 'react-router-dom';

describe('Matchday Group', () => {

  const matches = [
    {
        "area": {
            "id": 2032,
        },
        "competition": {
            "id": 2013,
        },
        "season": {
            "id": 1557,
        },
        "homeTeam": {
            "name": "Team 1",
            "crest": "path/image1.png"
        },
        "awayTeam": {
            "name": "Team 2",
            "crest": "path/image2.png"
        },
        "score": {
            "fullTime": {
                "home": 2,
                "away": 1
            },
        }
    },
    {
      "area": {
          "id": 2032,
      },
      "competition": {
          "id": 2013,
      },
      "season": {
          "id": 1557,
      },
      "homeTeam": {
          "name": "Team 3",
          "crest": "path/image3.png"
      },
      "awayTeam": {
          "name": "Team 4",
          "crest": "path/image4.png"
      },
      "score": {
          "fullTime": {
              "home": 2,
              "away": 3
          }
      }
  }
];

  test('renders matchday group correctly', () => {
    render(<BrowserRouter><MatchdayGroup day={1} matches={matches} /></BrowserRouter>);
    
    // Check if matchday header is rendered
    const matchdayHeader = screen.getByText('Matchday 1');
    expect(matchdayHeader).toBeInTheDocument();

    // Check if results are rendered
    const results = screen.getByText('2 — 1');
    expect(results).toBeInTheDocument();

    // Check if away team name is rendered
    const teamAway = screen.getByText('Team 3');
    expect(teamAway).toBeInTheDocument();

  });

  test('renders matchday group with default values', () => {
    render(<BrowserRouter><MatchdayGroup /></BrowserRouter>);
    
    // Check if matchday header with default day is rendered
    const matchdayHeader = screen.getByText('Matchday 1');
    expect(matchdayHeader).toBeInTheDocument();

    // Check if no match items are rendered
    const matchItems = screen.queryAllByRole('row');
    expect(matchItems.length).toBe(0);
  });
});
