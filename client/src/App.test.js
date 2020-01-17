import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import WCPlayer from './components/WCPlayer';


test('renders without crashing', () => {
  render(<App />);
});

test('WCPlayer map is rendering', () => {
  const testMessage = 'It/s working it/s working!!'
  render(<WCPlayer>{testMessage}</WCPlayer>)
});