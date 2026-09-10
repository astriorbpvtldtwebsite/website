import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const getSystemTheme = () => {
  try {
    if (typeof window !== 'undefined' && window.matchMedia) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
  } catch (e) {
    // If detection fails, use light theme as default
  }
  return 'light';
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    } catch (e) {
      // Fallback if localStorage is inaccessible
    }
    return getSystemTheme();
  });

  // Apply theme classes and meta theme-color to document
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', theme === 'light' ? '#F1ECE6' : '#071616');
    }
  }, [theme]);

  // Listen to live OS system theme preference changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    try {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (!mediaQuery) return;

      const handleSystemThemeChange = (e) => {
        try {
          const savedTheme = localStorage.getItem('theme');
          // Only react to OS changes if the user hasn't explicitly locked a preference
          if (!savedTheme) {
            setTheme(e.matches ? 'dark' : 'light');
          }
        } catch (err) {
          setTheme('light');
        }
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleSystemThemeChange);
      } else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleSystemThemeChange);
      }

      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleSystemThemeChange);
        } else if (mediaQuery.removeListener) {
          mediaQuery.removeListener(handleSystemThemeChange);
        }
      };
    } catch (e) {
      // matchMedia listener setup failed gracefully
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'light' ? 'dark' : 'light';
      try {
        localStorage.setItem('theme', nextTheme);
      } catch (e) {
        // Fallback if localStorage is disabled
      }
      return nextTheme;
    });
  };

  const resetToSystemTheme = () => {
    try {
      localStorage.removeItem('theme');
    } catch (e) {
      // Fallback
    }
    setTheme(getSystemTheme());
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        resetToSystemTheme,
        isSystemTheme: typeof window !== 'undefined' ? !localStorage.getItem('theme') : true,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => useContext(ThemeContext);

