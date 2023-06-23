import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import competitionsService from '../../../services/competitions.service';
import { vi } from 'vitest';
import CompetitionSeasons from './CompetitionSeasons';

describe('Competition seasons', () => {
  const competition = {
    "area": {
        "id": 2224,
        "name": "Country 1",
        "code": "ESP",
        "flag": "path/flag1.png"
    },
    "id": 2014,
    "name": "Campeonato 1",
    "code": "PD",
    "type": "LEAGUE",
    "emblem": "path/emblem1.png",
    "currentSeason": {
        "id": 1504,
        "startDate": "2022-08-14",
        "endDate": "2023-06-04",
        "currentMatchday": 38,
        "winner": "Team 3"
    },
    "seasons": [
        {
            "id": 1504,
            "startDate": "2022-08-14",
            "endDate": "2023-06-04",
            "currentMatchday": 38,
            "winner": {
              "id": 78,
              "name": "Team 1",
              "shortName": "Team 1",
              "tla": "ATL",
              "crest": "path/78.svg",
          }
        },
        {
            "id": 380,
            "startDate": "2021-08-13",
            "endDate": "2022-05-22",
            "currentMatchday": 38,
            "winner": {
              "id": 78,
              "name": "Team 2",
              "shortName": "Team 2",
              "tla": "ATL",
              "crest": "path/78.svg",
          }
        }
    ]
  };

  it("Renders Loading... when competition is null", () => {

    const mock = vi
      .spyOn(competitionsService, "detail")
      .mockResolvedValue(null);

    render(<BrowserRouter><CompetitionSeasons /></BrowserRouter>);

    // Check if loading is rendered
    expect(mock).toHaveBeenCalled();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("Renders some seasons", async () => {

    const mock = vi
      .spyOn(competitionsService, "detail")
      .mockResolvedValue(competition);

    render(<BrowserRouter><CompetitionSeasons /></BrowserRouter>);

    // Wait for loading not to be in the screen
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    expect(mock).toHaveBeenCalled();

    // Check if competition name is rendered
    expect(screen.getByText("Campeonato 1")).toBeInTheDocument();

    // Check if season winner is rendered
    expect(screen.getByText("Team 2")).toBeInTheDocument();
  });

})