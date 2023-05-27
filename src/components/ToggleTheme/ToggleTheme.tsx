import { BsMask } from 'react-icons/bs';
import { useDarkMode } from '../../hooks/useDarkMode';

interface ToggleThemeProps {
  class: string;
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({ class: className }) => {
  const { theme, switchTheme } = useDarkMode();

  return (
    <div
      style={{ cursor: 'pointer', color: 'var(--text)' }}
      onClick={() => switchTheme()}
      className={className}
    >
      <BsMask />
    </div>
  );
};

export default ToggleTheme;
