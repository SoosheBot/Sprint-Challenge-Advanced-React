import React from 'react';
import { render, findByDisplayValue } from "@testing-library/react";
import App from './App';
import WCPlayer from './components/WCPlayer';
import WCPlayerCard from './components/WCPlayerCard';
import { text } from 'body-parser';


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

// test("App renders with light mode default", () => {
//   const { getByTestId } = render(<App />);
//   expect(getByTestId("dark-mode__toggle")).toBeInTheDocument();
//   // expect(getByTestId("header")).toHaveStyle("background-color: white");
//   expect(getByTestId).toHaveStyle("background-color:white"); 


// });

test("toggles the theme", () => {
  const { getByTestId } = render(<App />);
  const toggleBtn = getByTestId("toggle-theme-btn");
  fireEvent.click(toggleBtn);
  expect(getByTestId("header")).toHaveStyle("background-color: black");
  fireEvent.click(toggleBtn);
  expect(getByTestId("header")).toHaveStyle("background-color: white");
});