
import { useTheme } from '../context/ThemeContext';

function ToggleThemeButton () {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default ToggleThemeButton;