import OneInfo from './OneInfo';
import { queryByRole, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('OneInfo', () => {
  test('renders info value with green color if it is "Available"', () => {
    const infoName = 'Status';
    const infoValue = 'Available';

    const { getByText } = render(
      <OneInfo infoName={infoName} infoValue={infoValue} />
    );

    const valueElement = getByText(infoValue);
    expect(valueElement).toBeInTheDocument();
    expect(valueElement).toHaveStyle('color: #7EB942');
  });
});
