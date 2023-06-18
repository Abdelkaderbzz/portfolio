import ExtraSkills from './ExtraSkills';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
describe('ExtraSkills', () => {
  it('renders the component without throwing any errors', () => {
    render(<ExtraSkills />);
  });
  it('displays the correct title', () => {
    const { getByText } = render(<ExtraSkills />);
    const titleElement = getByText('Extra Skills');
    expect(titleElement).toBeInTheDocument();
  });
  it('renders the correct number of skill items', () => {
    const { getAllByTestId } = render(<ExtraSkills />);
    const skillItems = getAllByTestId('skill-item');
    expect(skillItems).toHaveLength(4);
  });
  it('displays the correct skill names', () => {
    const { getAllByTestId } = render(<ExtraSkills />);
    const skillNames = getAllByTestId('skill-name');
    const expectedNames = [
      'Tailwindcss,scss',
      'GIT Knowledge',
      'Problem solving Python',
      'MongoDB,Expressjs',
    ];
    skillNames.forEach((skillName, index) => {
      expect(skillName).toHaveTextContent(expectedNames[index]);
    });
  });
  it('renders the correct icon for each skill item', () => {
    const { getAllByTestId } = render(<ExtraSkills />);
    const skillIcons = getAllByTestId('skill-icon');
    skillIcons.forEach((skillIcon: Element) => {
      expect(skillIcon).toBeInTheDocument();
    });
  });
});
