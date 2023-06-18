import ProgressBar from './ProgressBar';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('ProgressBar', () => {
  it('renders the value and percentage correctly', () => {
    const value = '50';
    const percentage = '22%';
    const renderResult = render(
      <ProgressBar value={value} percentage={percentage} />
    );
    const valueElement = renderResult.getByText(value);
    const percentageElement = renderResult.getByText(percentage);
    const barElement = renderResult.getByRole('p-bar');
    expect(valueElement).toBeInTheDocument();
    expect(percentageElement).toBeInTheDocument();
    expect(barElement).toBeInTheDocument();
  });
});
