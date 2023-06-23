import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import competitionsService from '../../../services/competitions.service';
import { vi } from 'vitest';
import CompetitionsList from './CompetitionsList';


describe('Competition List', () => {

  const competitions = {
    competitions: [
      {
        "id": 2013,
        "area": {
          "name": "Country 1",
          "flag": "path/flag1.png"
        },
        "name": "Campeonato A",
        "code": "BSA",
        "type": "LEAGUE",
        "emblem": "path/emblem1.svg",
        "currentSeason": {
          "startDate": "2023-04-15",
          "endDate": "2023-12-03",
          "currentMatchday": 12,
          "winner": null
        }
      },
      {
        "id": 2014,
        "area": {
          "name": "Country 2",
          "flag": "path/flag2.png"
        },
        "name": "Campeonato B",
        "code": "BSA",
        "type": "LEAGUE",
        "emblem": "path/emblem2.svg",
        "currentSeason": {
          "startDate": "2023-04-15",
          "endDate": "2023-12-03",
          "currentMatchday": 13,
          "winner": null
        }
      }
    ]
  };

  it("Renders Loading... when competitions is null", () => {
    // Given
    const mock = vi
      .spyOn(competitionsService, "list")
      .mockResolvedValue(null);

    // When
    render(<BrowserRouter><CompetitionsList /></BrowserRouter>);

    // Then
    expect(mock).toHaveBeenCalled();
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("Renders competitions", async () => {

    const mock = vi
      .spyOn(competitionsService, "list")
      .mockResolvedValue(competitions);

    render(<BrowserRouter><CompetitionsList /></BrowserRouter>);

    // Wait for loading not to be in the screen
    await waitFor(() =>
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument()
    );

    expect(mock).toHaveBeenCalled();

    //Check if competition name is rendered
    expect(screen.getByText("Campeonato A")).toBeInTheDocument();

    //Check if competition country is rendered
    expect(screen.getByText("Country 2")).toBeInTheDocument();
  });
});