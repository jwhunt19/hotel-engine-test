/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('<App />', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders App component correctly', () => {
    expect(screen.getByText('GitHub Repo Finder')).toBeInTheDocument();
    const rolesAndFilter = [
      ['textbox', 'Search'],
      ['button', 'Go'],
      ['group', 'Sort by:'],
      ['radiogroup', 'sortBy'],
      ['radio', 'Best Match'],
      ['radio', 'Stars'],
    ];
    rolesAndFilter.forEach(([role, filter]) => {
      expect(screen.getByRole(role, { name: filter })).toBeInTheDocument();
    });

    const buttons = screen.getAllByRole('button');
    expect(buttons[1]).not.toBeNull();
  });

  test('Snackbar renders when no search input entered', async () => {
    expect(screen.queryByText('Please enter text before searching')).toBeNull();

    await userEvent.click(screen.getByRole('button', { name: 'Go' }));
    expect(screen.getByText('Please enter text before searching')).toBeInTheDocument();

    await act(async () => { await new Promise((r) => setTimeout(r, 3500)); });
    expect(screen.queryByText('Please enter text before searching')).toBeNull();
  });
});
