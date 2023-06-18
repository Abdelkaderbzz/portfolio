import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonPrimary from './ButtonPrimary';
import '@testing-library/jest-dom/extend-expect';
describe('ButtonPrimary', () => {
  test('renders button with correct value', () => {
    const value = 'Click Me';
    const { getByText } = render(
      <ButtonPrimary value={value} onClick={() => {}} />
    );
    const buttonElement = getByText(value);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls onClick function when button is clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ButtonPrimary value='Test' onClick={onClick} />
    );
    const buttonElement = getByText('Test');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
