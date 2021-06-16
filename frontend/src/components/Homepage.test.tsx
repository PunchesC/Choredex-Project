import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Homepage from './Homepage';


test('header classes',() =>{
  render(<Homepage />);
  const text = screen.getByText("welcome!");
  expect(text).toBeInTheDocument();
 });