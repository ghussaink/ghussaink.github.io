import { useState } from "react";
import Home from "./components/home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return <Home isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
}

export default App;
