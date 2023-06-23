import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import StandingItem from './StandingItem';

describe('Standing item', () => {
  const standing = {
    "position": 1,
    "team": {
        "id": 81,
        "name": "Team 1",
        "shortName": "Team 1",
        "tla": "FCB",
        "crest": "path/crest/81.svg"
    },
    "playedGames": 38,
    "form": null,
    "won": 28,
    "draw": 4,
    "lost": 6,
    "points": 88,
    "goalsFor": 70,
    "goalsAgainst": 20,
    "goalDifference": 50
};

it('renders standing info in the row', () => {
  render(<BrowserRouter><StandingItem data={standing} /></BrowserRouter>);

  // Check if standing team is rendered
  const teamName = screen.getByText('Team 1');
  expect(teamName).toBeInTheDocument();

  // Check if standing team points are rendered
  const points = screen.getByText('88');
  expect(points).toBeInTheDocument();

  //check if table footer is rendered
  const footerInfo = screen.getByText('POS: Position');
  expect(footerInfo).toBeInTheDocument();

});

})