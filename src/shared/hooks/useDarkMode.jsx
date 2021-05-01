import { useEffect, useState, useRef, useCallback } from "react";

const getCurrentTheme = () => {
  const currentTheme = localStorage.getItem("algosolver-theme");
  console.log(currentTheme);
  return currentTheme ? currentTheme : "light";
};

// i will use redux after that;

export const useDarkMode = () => {
  const [theme, setTheme] = useState(() => getCurrentTheme());
  const isMounted = useRef(false);

  const toggleTheme = (currentTheme) => {
    setTheme(currentTheme);
  };

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem("algosolver-theme", theme);
    }
    isMounted.current = true;
  }, [theme]);

  return [theme, toggleTheme];
};
