import React from "react";
import { render } from "@testing-library/react";
import App from "./App";


test("renders without crashing", () => {
  render(<App />);
});

test("header text is displaying", () => {
  const { findAllByText } = render(<App />);
  findAllByText(/header/i);
});

test("WCPlayers data is displaying", () => {
  const { getByTestId } = render(<App />);
  getByTestId(/wc-player-container/i);
});

test("Darkmode toggle is rendering, App background color is white", () => {
  const {findByDisplayValue} = render(<App />)
  findByDisplayValue(/dark-mode__toggle/i);
  findByDisplayValue("background-color:white");
});