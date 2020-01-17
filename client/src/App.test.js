import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import WCPlayer from './components/WCPlayer';
import WCPlayerCard from './components/WCPlayerCard';


test('renders without crashing', () => {
  render(<App />);
});

// test('WCPlayerCard returns on props.WCPlayerInfo.map', () => {
//   render(<WCPlayer />)
// });