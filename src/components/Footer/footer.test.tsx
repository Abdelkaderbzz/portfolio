import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';
describe('Footer', () =>
{ 
  it('renders footer with correct text', () =>
  { 
    const {getByText} = render(<Footer/>)
    const textElement = getByText('2023 All Rights Reserved.Abdelkader Bouzomita')
    expect(textElement).toBeInTheDocument();
    const iconElement = document.querySelector('.footer svg');
    expect(iconElement).toBeInTheDocument();
  })
})