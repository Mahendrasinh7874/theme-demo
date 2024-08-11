
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("themeMode", isDarkMode ? "dark" : "light");

  }, [isDarkMode]);

  return (
    <div className='bg-primary text-gray-900 min-h-screen flex items-center justify-center'>
      {isDarkMode ? <Moon onClick={() => setIsDarkMode(!isDarkMode)} size={25} className="text-brand h-5 w-5 absolute right-10 top-10 cursor-pointer" /> :
        <Sun onClick={() => setIsDarkMode(!isDarkMode)} size={25} className="text-brand h-5 w-5 absolute right-10 top-10 cursor-pointer" />
      }
      <h1 className="text-2xl text-brand">Home</h1>
    </div>

  );
}
