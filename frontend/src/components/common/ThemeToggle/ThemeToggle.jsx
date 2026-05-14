import { useTheme }  from '../../../context/ThemeContext';
import              './ThemeToggle.css';

const ThemeToggle = () => {

  const { theme, toggleTheme } = useTheme();

  return (

    <button
      className="theme-toggle"
      onClick={toggleTheme}
      title={`Trocar para tema ${theme === 'dark' ? 'claro' : 'escuro'}`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <span className="theme-icon">☀️</span>
      ) : (
        <span className="theme-icon">🌙</span>
      )}
    </button>

  );

};

export default ThemeToggle;
