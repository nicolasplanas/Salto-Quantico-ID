import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

  const [theme, setTheme] = useState(() => {

    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';

  });

  useEffect(() => {

    // Salvar no localStorage
    localStorage.setItem('theme', theme);

    // Aplicar ao document
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    // Aplicar classe ao body também para compatibilidade
    if (theme === 'light') {
      document.body.classList.remove('theme-dark');
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.remove('theme-light');
      document.body.classList.add('theme-dark');
    }

  }, [theme]);

  // Inicializar tema ao montar o componente
  useEffect(() => {

    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    if (theme === 'light') {
      document.body.classList.add('theme-light');
    } else {
      document.body.classList.add('theme-dark');
    }

  }, []);

  const toggleTheme = () => {

    setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  };

  return (

    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>

  );

};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
