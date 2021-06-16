import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

test('header classes',() =>{
 render(<Header />);
 const text = screen.getByText("CHOREDEX");
 expect(text).toBeInTheDocument();
});