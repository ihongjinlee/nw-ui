import { useEffect, useState } from 'react';
import SunIcon from './ui/icons/SunIcon';
import MoonIcon from './ui/icons/MoonIcon';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setIsDarkMode(prefersDarkScheme);
  }, []);

  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <button className='text-sm font-bold' onClick={handleDarkMode}>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
