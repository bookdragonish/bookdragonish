
import { useTheme } from '../../context/ThemeContext';

function ToggleThemeButton () {
  const { theme, toggleTheme } = useTheme();

  return (
      <button onClick={toggleTheme}>{theme}</button>
  );
};

export default ToggleThemeButton;