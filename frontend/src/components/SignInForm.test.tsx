import { fireEvent, render, screen } from '@testing-library/react';
import SignInForm from './SignInForm';


test('h2 text', () => {
  render(<SignInForm />);
  const text = screen.getByText("SIGN IN FORM");
  expect(text).toBeInTheDocument
});


test('password text', () => {
  render(<SignInForm />);
  const text = screen.getByText("password:");
  expect(text).toBeInTheDocument
});



