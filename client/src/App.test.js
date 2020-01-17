import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import WCPlayer from './components/WCPlayer';
import WCPlayerCard from './components/WCPlayerCard';


test('renders without crashing', () => {
  render(<App />);
});

test('header text is displaying', () => {
  const { findAllByText } = render(<App />);
    findAllByText(/header/i);
});

test('WCPlayers data is displaying', () => {
  const { getByTestId } = render(<App />);
    getByTestId(/wc-player-container/i);
});