import React, { createContext, useContext, useState, ReactNode } from 'react';
import { colors } from '../assets/themes';

interface ThemeContextType {
  activeColors: typeof colors.light;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [activeColors, setActiveColors] = useState(colors.light);

  const toggleTheme = () => {
    setActiveColors((prevColors) =>
      prevColors === colors.light ? colors.dark : colors.light
    );
  };

  return (
    <ThemeContext.Provider value={{ activeColors, toggleTheme }}>
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
